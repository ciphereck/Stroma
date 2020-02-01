class Chrome {
    constructor() {
    }

    static getOnCreateListener() {
        return chrome.tabs.onCreated;
    }

    static getOnUpdateListener() {
        return chrome.tabs.onUpdated;
    }

    static getOnMovedListener() {
        return chrome.tabs.onMoved;
    }

    static getOnActivatedListener() {
        return chrome.tabs.onActivated;
    }

    static getOnHighlightedListener() {
        return chrome.tabs.onHighlighted;
    }

    static getOnDetachedListener() {
        return chrome.tabs.onDetached;
    }

    static getOnAttachedListener() {
        return chrome.tabs.onAttached;
    }

    static getOnRemovedListener() {
        return chrome.tabs.onRemoved;
    }

    static getOnReplacedListener() {
        return chrome.tabs.onReplaced;
    }

    static addAlreadyOpenedTabs(){
        chrome.windows.getAll({}, function (windowArray) {
            windowArray.forEach(iterateWindow)
        })

        var iterateWindow = function (individualWindow) {
            var queryInfo = {
                "windowId": individualWindow.id
            }
            chrome.tabs.query(queryInfo, function (tabArray) {
                tabArray.forEach(addTab)
            })
        }

        var addTab = function (individualTab) {
            tabs.addTab(new Tab(individualTab))
        }
    }

    static blockSpecificTab(id) {
        chrome.tabs.setZoom(id, 1000000, function () {
            let password = prompt("Enter password")

            if (password == "mudit") {
                tabs.getSpecificTab(id).isBlocked = false
                chrome.tabs.setZoom(id, 0)
            }
        })
    }
}