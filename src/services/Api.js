import axios from 'axios';

export default axios.create({
    baseURL: "https://api.booking.knine.xyz"
    /*
    * headers: {
    * Authorization: @TODO
    * }
    * */
});
