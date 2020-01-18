console.log(new Tab().TOTAL_TABS)

console.log("Fuck u")

chrome.tabs.onCreated.addListener(function(tab){
	console.log(tab)
})

