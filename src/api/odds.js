import axios  from 'axios'
import api from './index'
axios.defaults.baseURL = 'http://www.llgj.com/';


export function Getodds (parameter) {
    return axios({
        url: api.odds,
        method: 'get',
        data: parameter,
    })
}