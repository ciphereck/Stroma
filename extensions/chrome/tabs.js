class Tabs {
    #tabMap = new Map()

    constructor() {
        const thisValue = this
        chrome.windows.getAll({}, function (windowArray) {
            windowArray.forEach(fun)
        })

        var fun = function (individualWindow) {
            var queryInfo = {
                "windowId": individualWindow.id
            }
            chrome.tabs.query(queryInfo, function (tabArray) {
                tabArray.forEach(fun1)
            })
        }

        var fun1 = function (individualTab) {
            thisValue.addTab(new Tab(individualTab))
        }
    }

    get tabMap() {
        return this.#tabMap
        this.showTabs()
    }

    addTab(tab) {
        this.#tabMap.set(tab.id, tab)
        this.showTabs()
    }

    getSpecificTab(id) {
        this.#tabMap.get(id)
        this.showTabs()
    }

    setTab(tab) {
        this.#tabMap.set(tab.id, tab)
        this.showTabs()
    }

    deleteTab(id) {
        this.#tabMap.delete(id)
        this.showTabs()
    }

    showTabs() {
        console.log(this.#tabMap)
    }

    updateTabStatus(id, status) {
      this.#tabMap.get(id).status = status;
      this.showTabs()
    }

    updateTabUrl(id, url) {
      this.#tabMap.get(id).url = url;
      this.showTabs()
    }

    updateTabFavIconUrl(id, favIconUrl) {
      this.#tabMap.get(id).favIconUrl = favIconUrl;
      this.showTabs()
    }

    updateTabTitle(id, title) {
      this.#tabMap.get(id).title = title;
      this.showTabs()
    }
}
