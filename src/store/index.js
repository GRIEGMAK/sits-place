import {makeAutoObservable} from "mobx";
import axios from "axios";

class Store {

    authToken = 'JONOQ65GML4XUR6N'
    linkapi = "";

    bigdata = []
    constructor() {
        makeAutoObservable(this)
    }

    async getApi(url) {
        const authToken = 'Token JONOQ65GML4XUR6N'
        const head = {
            'Authorization': authToken
        }
        console.log(head)
        axios.get(url, head)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    // async getApi(url) {
        
    //     let response = await fetch(url, { 
    //         method: "GET",
    //         withCredentials: true,
    //         credentials: 'include',
    //         headers: {
    //             "Authorization": this.authToken
    //         }
    //     });
    //     if (response.ok) { 
    //         this.bigdata.push(await response.json())
    //         console.log(this.bigdata)
    //     } else {
    //         alert("Ошибка HTTP: " + response.status);
    //         console.log(response)
    //     }
        
    // }




}
export default new Store();