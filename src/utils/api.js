import dayjs from 'dayjs'
import axios from 'axios'
import {toast} from 'react-toastify'

export const api =  axios.create({
    baseURL:"http://localhost:5000/api",
});

export const getAllProperties = async()=>{
    try {
        const response = await api.get("/residency/allresidencies",{
            timeout:10*1000
        });

        if(response.status===404 || response.status===500){
            throw response.data;
        }

        return response.data;

    } catch (error) {
        toast.error("Something wen wrong.")
    }
}