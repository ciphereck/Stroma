chrome.tabs.onCreated.addListener(function(tab) {
	console.log(tab)
})


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	console.log("updated", tab, tabId, changeInfo)
})



chrome.tabs.onMoved.addListener(function(tabId, moveInfo) {
	console.log("moved", tabId, moveInfo)
})


chrome.tabs.onActivated.addListener(function(tabId, selectInfo) {
	console.log("activated", tabId, selectInfo)
})


chrome.tabs.onHighlighted.addListener(function(highlightInfo) {
	console.log("highlighted", highlightInfo)
})


chrome.tabs.onDetached.addListener(function(tabId, detachInfo) {
	console.log("detached", tabId, detachInfo)
})


chrome.tabs.onAttached.addListener(function(tabId, attachInfo) {
	console.log("attached", tabId, attachInfo)
})


chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
	console.log("removed", tabId, removeInfo)
})


chrome.tabs.onReplaced.addListener(function(addedTabId, removedTabId) {
	console.log("replaced", tabId, removedTabId)
})
