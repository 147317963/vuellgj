import axios  from 'axios'
import api from './index'
axios.defaults.baseURL = 'http://www.llgj.com/';


export function login (parameter) {
    return axios({
        url: api.login,
        method: 'post',
        data: parameter,
    })
}