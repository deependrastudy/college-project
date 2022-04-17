import axios from 'axios';
import path from './path';

const BASEURL = path.API_URL;

const getCategory = (url,reqHeaders) =>{
    return axios.get(BASEURL+'get-category' ,reqHeaders);
}

export default {
    getCategory,
};