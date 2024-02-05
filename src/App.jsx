import { Suspense } from "react";
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

function App() {
  const queryClient = new QueryClient;
  return (
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
  );
}

export default App;
