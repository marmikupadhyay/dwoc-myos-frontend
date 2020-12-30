import React from 'react';
import CardSingle from './CardSingle';
import Grid from '@material-ui/core/Grid';
const cardDetails = [
    {
        name: 'First one',
        visibility: 'private'
    },
    {
        name: 'Second one',
        visibility: 'Public'
    },
    {
        name: 'Second one',
        visibility: 'Public'
    },
    {
        name: 'Second one',
        visibility: 'Public'
    },
    {
        name: 'Second one',
        visibility: 'Public'
    },
    {
        name: 'Second one',
        visibility: 'Public'
    },
    {
        name: 'Second one',
        visibility: 'Public'
    }
]



export default function Cards() {

    const cardMaker = (cardObj) => {
        return(
            <CardSingle {...cardObj} />
        )
    }
    return (
        <Grid container xs = {12} md = {12}>
        {cardDetails.map(cardObj => cardMaker(cardObj))}    
	    </Grid>
   );  
 } 