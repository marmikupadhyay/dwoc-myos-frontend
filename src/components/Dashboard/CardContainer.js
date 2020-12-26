import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	mainBox: {
		minHeight: '100vh',
		background: theme.palette.background.primary,
	},
	container: {},
}));

function CardContainer() {
	const classes = useStyles();
	return (
		<Grid item container xs={12} md={9}>
			Some Text
		</Grid>
	);
}

export default CardContainer;
