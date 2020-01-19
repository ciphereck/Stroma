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
	static get TOTAL_TABS() {
		return Tab.#TOTAL_TABS
	}

	get stromaId() {
		return this.#stromaId;
	}

	get id() {
		return this.#id;
	}

	get index() {
		return this.#index;
	}

	get windowId() {
		return this.#windowId;
	}

	get url() {
		return this.#url;
	}

    //Setters
	static set TOTAL_TABS(TOTAL_TABS) {
		Tab.#TOTAL_TABS = TOTAL_TABS;
	}

	set stromaId(stromaId) {
		this.#stromaId = stromaId;
	}

	set id(id) {
		this.#id = id;
	}

	set index(index) {
		this.#index = index;
	}

	set windowId(windowId) {
		this.#windowId = windowId;
	}

	set url(url) {
		this.#url = url;
	}
}
