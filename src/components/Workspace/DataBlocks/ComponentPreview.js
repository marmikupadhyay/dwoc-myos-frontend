import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
	Avatar,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
} from '@material-ui/core';
import WidgetsIcon from '@material-ui/icons/Widgets';

const useStyles = makeStyles((theme) => ({
	dataCardContainer: {
		margin: '1em',
	},
	dataCard: {},
	dataCardTitle: {
		fontSize: '1.5em',
		fontFamily: 'Roboto',

		backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
	},
	iconBox: {
		marginRight: '1em',
		width: '50px',
		height: '50px',
	},
	icon: {
	},
	iconBox2: {

		marginRight: '1em',
		width: '50px',
		height: '50px',
	},
	icon2: {
	},
	dataCardBody: {
		padding: '1em',
		fontFamily: 'Roboto',
		minHeight: '200px',
	},
	defaultItem: {
		padding: '1em',
		textAlign: 'center',
	},
}));

const listItemText = {
	primary: {
		fontSize: '1em',
		fontWeight: 'bold',
	},
	secondary: {
		fontSize: '1em',
		color: '#0D0A0B',
	},
	primaryDark: {
		fontSize: '1.4em',
		fontWeight: 'bold',
		color: '#EC573D',
	},
	secondaryLight: {
		fontSize: '1em',
		color: 'white',
	},
};

function ComponentPriview() {
	const classes = useStyles();
	return (
		<Grid item xs={12} md={6} lg={4}>
			<Paper elevation={3} className={classes.dataCardContainer}>
				<Grid container direction='column' className={classes.dataCard}>
					<Grid item xs={12} className={classes.dataCardTitle}>
						{/* Component Name Item */}
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.iconBox}>
									<WidgetsIcon
										fontSize='large'
										className={classes.icon}
									/>
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primaryTypographyProps={{
									style: listItemText.primary,
								}}
								secondaryTypographyProps={{
									style: listItemText.secondary,
								}}
								primary='Component Preview'
								secondary='.data-card-container'
							/>
						</ListItem>
					</Grid>
					<Grid
						item
						container
						alignItems='center'
						xs={12}
						className={classes.dataCardBody}>
						<Grid item xs={12}>
							<Paper className={classes.defaultItem}>
								Select a Component Show it Here
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
}

export default ComponentPriview;
