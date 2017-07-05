
export default class LocalStorage {

    static setItem(key, item) {
        return window.localStorage.setItem(key, JSON.stringify(item));
    }

    static getItem(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }
}