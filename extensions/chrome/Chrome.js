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
}