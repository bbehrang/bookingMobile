import axios from "axios";

class Api {
    constructor(url) {
        this.adapter = axios.create({
            baseURL: url
        });

    }

    sendRequest = (url, type, payload) => {

        return this.adapter.request({
            url:url,
            method: type,
            data: payload
        });
    };
}

export default new Api("https://api.booking.knine.xyz");
