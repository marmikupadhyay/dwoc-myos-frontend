import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles((theme) => ({
	topWrapper: {
		height: '3.5em',
		background: theme.palette.background.primary,
		color: theme.palette.font.light,
		position: 'fixed',
	},
	siteIconBox: {
		width: '60px',
		background: theme.palette.background.secondary,
	},
	logoImg: {
		width: '100%',
		height: '3.5em',
	},
	heading: {
		fontSize: '2em',
		marginLeft: '1em',
		fontFamily: 'Roboto',
		letterSpacing: '1px',
	},
}));

function Topbar(props) {
	const classes = useStyles();
	return (
		<Grid container className={classes.topWrapper}>
			<Grid
				item
				container
				justify='center'
				alignItems='center'
				className={classes.siteIconBox}>
				<img
					src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1361.25&fit=crop&crop=faces'
					alt='Logo'
					className={classes.logoImg}
				/>
			</Grid>
			<Grid
				item
				container
				xs={8}
				alignContent='center'
				className={classes.heading}>
				<Grid item xs={6}>
					{props.title}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Topbar;
