class Tab {
	#id
	#url
	#status
	#favIconUrl
	#title
	#isBlocked

	constructor(tab) {
		this.#id = tab.id;
		this.#url = tab.url;
		this.#status = tab.status;
		this.#favIconUrl = tab.favIconUrl;
		this.#title = tab.title;
		this.#isBlocked = true
	}

	//Getters
	get id() {
		return this.#id;
	}

	get url() {
		return this.#url;
	}

	get status() {
		 return this.#status;
	}

	get favIconUrl() {
		 return this.#favIconUrl;
	}

	get title() {
		 return this.#title;
	}

	get isBlocked() {
		return this.#isBlocked;
	}

    //Setters
	set id(id) {
		this.#id = id;
	}

	set url(url) {
		this.#url = url;
	}

	set status(status) {
		this.#status = status;
	}

	set favIconUrl(favIconUrl) {
		this.#favIconUrl = favIconUrl;
	}

	set title(title) {
		this.#title = title;
	}

	set isBlocked(isBlocked) {
		this.#isBlocked = isBlocked
	}
}
