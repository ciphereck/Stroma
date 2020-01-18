class Tab {
	static #TOTAL_TABS = 0n
	#stromaId
	#id
	#index
	#windowId
	#url

	constructor() {

	}

	//Getters
	private static get TOTAL_TABS() {
		return Tab.#TOTAL_TABS
	}

	private get stromaId() {
		return #stromaId;
	}

	private get id() {
		return #id;
	}

	private get index() {
		return #index;
	}

	private get windowId() {
		return #windowId;
	}

	private get url() {
		return #url;
	}

	//Setters
	private static set TOTAL_TABS(TOTAL_TABS) {
		Tab.#TOTAL_TABS = TOTAL_TABS;
	}

	private set stromaId(stromaId) {
		this.#stromaId = stromaId;
	}

	private set id(id) {
		this.#id = id;
	}

	private set index(index) {
		this.#index = index;
	}

	private set windowId(windowId) {
		this.#windowId = windowId;
	}

	private set url(url) {
		this.#url = url;
	}
}