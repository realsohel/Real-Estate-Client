import dayjs from 'dayjs'
import axios from 'axios'
import {toast} from 'react-toastify'

export const api =  axios.create({
    baseURL:"http://localhost:5000/api",
});

// const{userDetails:{token, bookings}, setUserDetails} =useContext(UserDetailsContext);

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
        toast.error("Something went wrong.")
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
    } catch (error) {
        toast.error("Something went wrong.")
    }
}

// Create User.
export const createUser = async(email,token)=>{
    try {
        await api.post(`/user/register`,{email},{
            headers:{
                Authorization: `Bearer ${token}`
            }}
        )

        if(response.status===404 || response.status===500){
            throw response.data;
        }

        return response.data;
    } catch (error) {
        toast.error("Something went wrong, Please try again")
    }
}

// BookVisit. 
export const bookVisit = async(date,propertyId,email,token)=>{
    
    try {
        const response = await api.post(`/user/bookVisits/${propertyId}`,
            {
                email,
                id:propertyId,
                date:dayjs(date).format("DD/MM/YYYY")
            },
            {
                headers:{
                    Authorization: `Bearer ${token}`
            }
        })
        
        return response.data;

    } catch (error) {    
        throw error;
    }
    
}

// Cancel Visit
export const removeBooking = async(id,email,token)=>{
    try {
        await api.post(`/user/removeBooking/${id}`,{
            email,
        },
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        // return response.data;
        toast.success("Cancelled Sccefully.",{position:"bottom-right"})

    } catch (error) {    
        toast.error("Something went wrong, Please try again",{position:"bottom-right"})
        throw error;
    }
}

// Add favourites
export const toFav = async(id,email,token)=>{
    try{
        await api.post(`/user/updatefavourites/${id}`,{
            email,
        },
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        // return response.data;
        toast.success("Favourites Updated successfully.",{position:"bottom-right"})

    } catch (error) {    
        toast.error("Something went wrong, Please try again",{position:"bottom-right"})
        throw error;
    }
}

