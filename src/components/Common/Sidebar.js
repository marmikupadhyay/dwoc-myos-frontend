import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CodeIcon from '@material-ui/icons/Code';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
	navWrapper: {
		height: '100vh',
		width: '60px',
		background: theme.palette.background.primary,
		color: theme.palette.font.light,
	},
	navIcons: {
		color: theme.palette.accent.secondary,
		fontSize: '3em',
		margin: '10px 0',
	},
	upperDiv: {
		marginTop: '10vh',
	},
}));

function Sidebar() {
	const classes = useStyles();
	return (
		<Grid container item className={classes.navWrapper}>
			<Grid
				container
				item
				direction='column'
				alignItems='center'
				className={classes.upperDiv}
				xs={12}>
				<Grid item>
					<DashboardIcon className={classes.navIcons} />
				</Grid>
				<Grid item>
					<CodeIcon className={classes.navIcons} />
				</Grid>
				<Grid item>
					<FindInPageIcon className={classes.navIcons} />
				</Grid>
			</Grid>
			<Grid
				container
				direction='column'
				alignItems='center'
				item
				xs={12}
				justify='flex-end'>
				<Grid item>
					<ExitToAppIcon className={classes.navIcons} />
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Sidebar;
