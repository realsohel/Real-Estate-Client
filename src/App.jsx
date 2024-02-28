import { Suspense, useState } from "react";
import "./app.css"
import Webiste from "./pages/Webiste";
import {
BrowserRouter, Route, Routes
} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import {
  QueryClient, QueryClientProvider 
} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Property from "./pages/Property/Property";
import UserDetailsContext from "./context/userDetailsContext";
import { MantineProvider } from "@mantine/core";

import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'

function App() {
  const queryClient = new QueryClient;

  const [userDetails, setUserDetails] = useState({
    favourites:[],
    bookings:[],
    token:null
  }) 

  return (
    <MantineProvider >
      <LocalizationProvider dateAdapter={AdapterDayjs}>

      <UserDetailsContext.Provider value={{userDetails,setUserDetails}}>   
      
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Suspense fallback={<div>Loading... </div>}>
              <Routes>
                <Route element={<Layout/>}>
                  <Route exact path="/" element={<Webiste/>} />
                  <Route exact path="/properties" >
                    <Route index element={<Properties/>}/>
                    <Route path=":propertyId" element={<Property/>}/>
                  </Route>
                </Route>

              </Routes>
            </Suspense>
          </BrowserRouter>
          <ToastContainer/>
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>

      </UserDetailsContext.Provider>
      </LocalizationProvider>
    </MantineProvider>
  );
}

export default App;
