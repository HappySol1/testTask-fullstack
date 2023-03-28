import axios from "axios";

const instans = axios.create({
    baseURL: 'http://dzpages.ru/api/',
    headers: {
        'Content-Type': 'text/plain'
    },
});

export default instans;