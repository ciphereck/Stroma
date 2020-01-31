class Tabs {
    #tabMap = new Map()

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
}