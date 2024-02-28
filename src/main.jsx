import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from '@auth0/auth0-react'
import { StyledEngineProvider } from '@mui/material/styles';



ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <Auth0Provider
          domain="realsohel.us.auth0.com"
          clientId="hGjjSU6QhUHvDrlgMWFcGfr3wBDIKVL3"
          authorizationParams={{
            redirect_uri:"http://localhost:5173/"
          }}
          audience="http://localhost:5000"
          scope="openid profile email"
        >
          
            <App />
        </Auth0Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
