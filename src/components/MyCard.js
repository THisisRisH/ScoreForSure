import { Button, Card, CardContent, CardActions, Grid,Dialog, Typography, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import React, {Fragment, useState} from "react";
import { getMatchDetail } from "../api/Api";
const MyCard = ({match})=>{
    const [detail, setDetail] = useState({});
    const [open,setOpen]= useState(false);
    const handleClick=(id) =>{
        getMatchDetail(id)
        .then((data)=>{
        console.log("MATCH DATA",data);
        setDetail(data);
        handleOpen();
        })
        .catch((error)=>console.log(error));
    };
    const getMatchCard=()=>{
        return (
            <Card style={{marginTop: 50}}>
                <CardContent>
                <Grid  container justify="space-around" spacing={2}>
                    <Grid item>
                    <Typography ><p className ="yent">{match["team-1"]}</p></Typography>
                    </Grid>
                    <Grid item>
                        <img
                         style={{width: 150}} src={require("../Image/logoo.png")} alt=""/>


                    </Grid>
                    <Grid item>
                       <Typography ><p className = "hent">{match["team-2"]}</p></Typography> 
                    </Grid>

                </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                    <Button onClick={()=>{
                        handleClick(match.unique_id);
                    }} variant = "contained" color="secondary">
                        Match Details
                    </Button>
                    <Button style={{marginLeft:8}} variant = "contained" color="primary">
                        Match Date {new Date(match.dateTimeGMT).toLocaleDateString()}
                    </Button>
                    </Grid>
                </CardActions>
            </Card>
        )
    };
    const handleClose=()=>{
        setOpen(false);

    }
    const handleOpen=()=>{
        setOpen(true);

    }
    const getDialog=()=>(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"MATCH DETAILS.."} </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.stat}</Typography>
                    <Typography>
                        Match 
                        <span style={{fontStyle: "italic", fontWeight:"bold"}}>
                            {detail.matchStarted?"Started":"Not Started yet"}
                        </span>
                    </Typography>
                    <Typography>
                        Score
                        <span style = {{fontStyle:"italic", fontWeight: "bold"}}>
                            {detail.score}
                        </span>
                    </Typography>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color = "primary" autofocus>
                    Close
                </Button>
            </DialogActions>


        </Dialog>
    );


    return <Fragment>
        {getMatchCard()}
        {getDialog()}
    </Fragment>
};
export default MyCard;