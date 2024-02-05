import dayjs from 'dayjs'
import axios from 'axios'
import {toast} from 'react-toastify'

export const api =  axios.create({
    baseURL:"http://localhost:5000/api",
});

// Fetching all properties.
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

// Fetching single property.
export const getProperty = async(id)=>{
    try {
        const response = await api.get(`/residency/${id}`,{
            timeout:10*1000
        })

        if(response.status===404 || response.status===500){
            throw response.data;
        }

        return response.data;
        console.log("hello")
    } catch (error) {
        toast.error("Something wen wrong.")
    }
}