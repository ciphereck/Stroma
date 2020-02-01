class Tabs {
    #tabMap = new Map()

    constructor() {
        Chrome.addAlreadyOpenedTabs()
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
        return this.#tabMap.get(id)
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
