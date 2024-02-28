import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import "./BookingModal.css"
import { DatePicker } from '@mui/x-date-pickers-pro';
import { useMutation } from 'react-query';
import { useContext } from 'react';
import UserDetailsContext from '../../context/userDetailsContext';
import { bookVisit } from '../../utils/api';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const BookingModal = ({opened,setOpened,propertyId, email}) => {
    const handleClose = () => setOpened(false);
    const [value,setValue] = useState(null);
    const{userDetails:{token, bookings}, setUserDetails} =useContext(UserDetailsContext)
    // console.log(value.$d)
    console.log(bookings)
    const handleBookingSuccess = ()=>{
        toast.success("Visit booked Successfully.", {position:"bottom-right"})
        setUserDetails(prev => ({
            ...prev,
            bookings: [
                ...prev.bookings,
                {
                id: propertyId,
                date: dayjs(value.$d).format("DD/MM/YYYY") // Assuming value is already a date object
                }
            ]
            }));
    }

    const {mutate,isLoading} = useMutation({
        mutationFn:()=> bookVisit(value.$d,propertyId,email,token),
        onSuccess: handleBookingSuccess,
        onError:({response})=>{toast.error(response.data.message, {position:"bottom-right"})},
    });

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={opened}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="material-Box">
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Select Your Date of visit.
                    </Typography>
                    <div className="flexCenter" style={{margin:"1rem",justifyContent:"space-evenly"}}>
                        <DatePicker 
                            hintText="Select the date"
                            value={value} 
                            onChange={setValue} 
                            disablePast
                        />
                        <button className='button'
                            disabled={!value || isLoading}
                            onClick={()=>{
                                mutate()
                                setOpened(false)
                            }}
                        >Book Visit</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default BookingModal
