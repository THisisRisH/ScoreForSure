import React from "react";
import { AppBar, Typography,Toolbar, IconButton, Button } from "@material-ui/core";
import DehazeIcon from '@material-ui/icons/Dehaze';

const Navbar= () => {

    return (
     <AppBar  position="static">
    <Toolbar>
        <IconButton color="secondary">
           <DehazeIcon />
        </IconButton>
     <Typography variant = "h6" color="textPrimary">live score</Typography>
     <Button style = {{marginLeft: "auto"}} variant="contained" color = "secondary" onClick = {() => {alert(" This project is done by Rishabh Saxena and Rishi Raj"
      ,"Rishabh Saxena and Rishi Raj")}}>About me</Button>
     <Button></Button>
     </Toolbar>
    </AppBar>
    );
};
export default Navbar;