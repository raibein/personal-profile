import axios from 'axios';

export function getAboutContent() {
        //return axios.get('../mockup/profile.json')
    return axios.get('http://127.0.0.1:5000/api/currencies')
            .then(response => response.data);
}
