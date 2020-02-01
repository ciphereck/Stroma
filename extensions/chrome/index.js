let tabs = new Tabs()

Chrome.getOnCreateListener().addListener(function (chromeTab) {
    tabs.addTab(new Tab(chromeTab))
})

Chrome.getOnRemovedListener().addListener(function (chromeTabid, removeInfo) {
    tabs.deleteTab(chromeTabid)
})

Chrome.getOnUpdateListener().addListener(function(chromeTabid, changeInfo, chromeTab) {
    if(changeInfo.status != undefined) {
      tabs.updateTabStatus(chromeTabid, changeInfo.status)
    }

    if(changeInfo.url != undefined ) {
       tabs.updateTabUrl(chromeTabid, changeInfo.url)
    }

    if(changeInfo.favIconUrl != undefined) {
       tabs.updateTabFavIconUrl(chromeTabid, changeInfo.favIconUrl)
    }

    if(changeInfo.title != undefined) {
       tabs.updateTabTitle(chromeTabid, changeInfo.title)
    }
})

Chrome.getOnActivatedListener().addListener(function (activeInfo) {
    if( tabs.isLocked ) {
        if ( Backend.getIsLocked( tabs.getSpecificTab(activeInfo.tabId).url ) == true ) {
            if( tabs.getSpecificTab(activeInfo.tabId).isBlocked ) {
                Chrome.blockSpecificTab(activeInfo.tabId)
            }
        }
    }
})