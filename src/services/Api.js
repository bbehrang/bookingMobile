import axios from "axios";

class Api {
    constructor(url) {
        this.adapter = axios.create({
            baseURL: url
        });

    }

    sendRequest = (url, type, token, payload) => {
        return this.adapter.request({
            url:url,
            method: type,
            data: payload,
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        });
    };
}

export default new Api("https://api.booking.knine.xyz");
