import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import {Layout} from '../components/Layout/Layout';
import {Home} from "../pages/Home";
import {Login} from "../pages/Login";
import {SignUp} from "../pages/SignUp";
import {PrivateRoute} from "../components/PrivateRoute/PrivateRoute";
import {useAuth} from "../features/AuthContextProvider";
import { Typography } from "@mui/material";



export const RoutesTodo=()=>{
  const {isAuthenticate}=useAuth();

  return (
    <Routes>
      <Route path ="/" element={<Layout />} >
        <Route path ='login' element={<Login/>} />
        <Route path ='/' element={<PrivateRoute> <Home/> </PrivateRoute>} />
        <Route path ='signup' element={isAuthenticate? <Navigate to={"/"}/>: <SignUp/>} />
        <Route path="*" element={
          <Typography variant="h4" gutterBottom component="div" align="center" mt={1} color="#1b5e20">
           Page not found
         </Typography>
        }/>
      </Route>
    </Routes>
  )

}