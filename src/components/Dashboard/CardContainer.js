import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid , TextField, Container } from '@material-ui/core';
import Cards from './Cards';


const useStyles = makeStyles((theme) => ({
	mainBox: {
		minHeight: '100vh',
	},
	Searcher: {
		padding: '10px',
		textAlign: "center",
	},
}));

function CardContainer() {
	const classes = useStyles();
	return (
		<Grid item container xs={12} md={9}  >
			<Container>
			<form className={classes.root} noValidate autoComplete="off" >
      			<TextField id="standard-basic" label="Search" style = {{color: "white"}}/>
    			</form>
				<Cards/>
			</Container>
		</Grid>
	);
}

export default CardContainer;
