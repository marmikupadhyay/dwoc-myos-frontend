import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CodeIcon from '@material-ui/icons/Code';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	navWrapper: {
		height: 'calc(100vh - 3em)',
		width: '60px',
		position: 'fixed',
		backgroundColor: '#212121',
		padding: '0.5em'
	},
	navIcons: {
		fontSize: '3em',
		margin: '10px 0',
		width: '100%',
		color: theme.palette.primary.main
	},
	upperDiv: {},
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
					<Link to='/dashboard' >
						<DashboardIcon className={classes.navIcons}/>
					</Link>
				</Grid>
				<Grid item>
					<Link to='/workspace'>
						<CodeIcon className={classes.navIcons} />
					</Link>
				</Grid>
				<Grid item>
					<Link to='/feed'>
						<FindInPageIcon className={classes.navIcons} />
					</Link>
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
					<Link to='/login'>
						<ExitToAppIcon className={classes.navIcons} />
					</Link>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Sidebar;
