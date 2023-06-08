import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import {
	
	Button,
	Grid,

} from "@mui/material";

export default function Home() {
  return (
    <div>
       <Grid container spacing={2} 
	
	>
  <Grid item xs={6} >
 Home text
  </Grid>
  <Grid item xs={6} >
 
  <Button href="/login">Login</Button>
  </Grid>
  </Grid>
       
  
     
	
     
    </div>
  )
}
