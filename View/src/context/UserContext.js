import { createContext } from 'react'
import axios from '../axios';

const ApiUrl = 'http://localhost:3006';

const UserContext = createContext({
    addUser: async (userInfo, checkedInfo) => {
        console.log(userInfo, checkedInfo);
        let result = await axios.post(ApiUrl + '/adduser', {
            userInfo, checkedInfo
        });
        return result.data;
    },
   
    findData : async ()=>{
        let result = await axios.post(ApiUrl + '/finduser', {
            
        });
        return result.data;
    },
    /* getStoreEmail: async (storeName) => {
        let result = await axios.get(ApiUrl + '/getstore', {
            storeName
        });
        return result.data;
    },
    updateStore: async (StoreName, StoreType, status, newValues) => {
        const email = window.localStorage.getItem('email');
        let result = await axios.post(ApiUrl + '/updateStore', {
            email,
            StoreName,
            StoreType, 
            status,
            newValues
        });
        return result.data;
    },
    deleteStore: async (StoreName) => {
        const email = window.localStorage.getItem('email');
        let result = await axios.post(ApiUrl + '/deleteStore', {
            email,
            StoreName
        });
        return (result.data);
    }, */
})
export default UserContext;
