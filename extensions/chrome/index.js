let tabs = new Tabs()

Chrome.getOnCreateListener().addListener(function (chromeTab) {
    tabs.addTab(new Tab(chromeTab))
})

Chrome.getOnRemovedListener().addListener(function (chromeTabid, removeInfo) {
    tabs.deleteTab(chromeTabid)
})