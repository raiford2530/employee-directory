import axios from 'axios';


const API = {
        getUsers: () => {
        return axios.get("https://randomuser.me/api/?results=10&nat=us")          
    }
}

export default API;