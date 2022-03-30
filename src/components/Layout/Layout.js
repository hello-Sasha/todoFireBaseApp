import React from "react";
import {Outlet} from 'react-router-dom';
import {Header} from "../Header/Header";
import {makeStyles} from "@mui/styles";


const useStyles =makeStyles({
  root:{
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    padding:"10px"
  },
  container:{
    marginBottom: "60px",
    marginTop: "60px",
  }
})


export const Layout=()=>{
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Header/>
      </div>

      <Outlet/>
    </div>
  )
}