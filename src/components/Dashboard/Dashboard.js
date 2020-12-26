import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Sidebar from '../Common/Sidebar';
import Topbar from '../Common/Topbar';
import RightSideBar from './RightSideBar';
import CardContainer from './CardContainer';

const useStyles = makeStyles((theme) => ({
	mainBox: {
		minHeight: '100vh',
		background: theme.palette.background.secondary,
	},
	contentSection: {
		marginLeft: '60px',
	},
	container: {
		paddingTop: '3.5em',
	},
}));

function Dashboard() {
	const classes = useStyles();
	return (
		<div className={classes.mainBox}>
			<Topbar title='Dashboard' />
			<Grid container className={classes.container}>
				<Sidebar />
				<Grid item container className={classes.contentSection}>
					<CardContainer />
					<RightSideBar />
				</Grid>
			</Grid>
		</div>
	);
}

export default Dashboard;
