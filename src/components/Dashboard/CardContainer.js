import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid , TextField, Container, InputAdornment } from '@material-ui/core';
import Cards from './Cards';
import clsx from  'clsx';
import { CenterFocusStrong, Search } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
	mainBox: {
		minHeight: '100vh',
	},
	formDisplay: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: 'center',
		padding: '1.5em'
	},
	searcher: {
		width: '100%'
	}
}));

function CardContainer() {
	const classes = useStyles();
	return (
		<Grid item container xs={12} md={9}  >
			<Container>
			<form className={ clsx(classes.root,classes.formDisplay)} noValidate autoComplete="off" >
      			<TextField id="standard-basic" className = {classes.searcher} 
				  InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Search color = "primary" />
							</InputAdornment>
          					),
        				}} 
				/>
    			</form>
				<Cards/>
			</Container>
		</Grid>
	);
}

export default CardContainer;
