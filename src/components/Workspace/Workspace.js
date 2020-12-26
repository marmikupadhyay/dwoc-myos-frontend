import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Sidebar from '../Common/Sidebar';
import Topbar from '../Common/Topbar';

const useStyles = makeStyles((theme) => ({
	mainBox: {
		minHeight: '100vh',
		background: theme.palette.background.secondary,
	},
	container: {
		paddingTop: '3.5em',
	},
	contentSection: {
		marginLeft: '60px',
	},
}));

function Workspace() {
	const classes = useStyles();
	return (
		<div className={classes.mainBox}>
			<Topbar title='Workspace' />
			<Grid container className={classes.container}>
				<Sidebar />
				<Grid item container className={classes.contentSection}>
					Workspace
				</Grid>
			</Grid>
		</div>
	);
}

export default Workspace;
