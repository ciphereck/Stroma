class Backend {
    static getIsLocked(url) {
        return (Math.floor(Math.random() * 10)) % 2;
    }
}