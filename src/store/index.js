import {makeAutoObservable} from "mobx";

class Store {

    constructor() {
        makeAutoObservable(this)
    }

    getApi() {
        fetch('')
        .then
    }


}
export default new Store();