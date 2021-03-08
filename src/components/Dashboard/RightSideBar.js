import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	mainBox: {
		minHeight: '100vh',
		borderLeft: '2px solid white',
	},
	container: {},
}));

function RightSideBar() {
	const classes = useStyles();
	return (
		<Grid item container xs={12} md={3} className={classes.mainBox}>
			<Grid item>Hello there</Grid>
		</Grid>
	);
}

export default RightSideBar;
