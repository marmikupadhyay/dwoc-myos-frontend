import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';

const colors = ['#fff100','#ff8c00','#e81123', '#ec008c', '#68217a', '#00188f', '#00bcf2', '#00b294', '#009e49', '#bad80a' ];

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: 0,
      margin: theme.spacing(3),
      fontSize: '200px', 
      backgroundColor: "rgba(33,33,33,0.9)",
      fontFamily: "Poppins"
    },
    cardTextHeader:{
        fontFamily: "Poppins",
        fontWeight: "500"  
    },
    media: {
        height: 140,
        padding:0,
        margin:0
    },
    actions: {
        backgroundColor: "rgba(33,33,33,0.9)"
    },
    editButtonColor: {
        color: theme.palette.primary.dark
    },
  }));

export default function CardSingle(props){
    const classes = useStyles();

        return(
            <Grid item xs = {12} sm = {6} md = {4}>
                <Card className={classes.paper}>
                <CardHeader
                title= {props.name}
                subheader= {props.visibility}
                classes = {{
                    title: classes.cardTextHeader
                }}
                />
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    style = {{backgroundColor: colors[Math.floor(Math.random()*10)]}}
                    />
                </CardActionArea>
                <CardActions>
                    <IconButton>
                        <KeyboardArrowDownIcon/>
                    </IconButton>
                    <IconButton className={classes.editButtonColor}>
                         <EditIcon/>
                    </IconButton>
                    <IconButton color = "secondary">
                        <DeleteIcon/>
                    </IconButton>
                   
                </CardActions>
                </Card>
    </Grid>
        )
    
}