class Tab {
	#id
	#windowId
	#url

	constructor(tab) {
		this.#id = tab.id;
		this.#windowId = tab.windowId;
		this.#url = tab.url;
	}

	//Getters
	get id() {
		return this.#id;
	}

	get windowId() {
		return this.#windowId;
	}

	get url() {
		return this.#url;
	}

    //Setters
	set id(id) {
		this.#id = id;
	}

	set windowId(windowId) {
		this.#windowId = windowId;
	}

	set url(url) {
		this.#url = url;
	}
}
