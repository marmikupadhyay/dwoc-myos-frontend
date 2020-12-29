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
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import NoteIcon from '@material-ui/icons/Note';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
	dataCardContainer: {
		margin: '1em',
		// color: theme.palette.font.light,
	},
	dataCard: {},
	dataCardTitle: {
		fontSize: '1.5em',
		fontFamily: 'Roboto',
		// background: theme.palette.background.primary,
		// color: theme.palette.font.light,
		backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
	},
	iconBox: {
		background: theme.palette.accent.primary,
		marginRight: '1em',
		width: '50px',
		height: '50px',
	},
	icon: {
		color: theme.palette.background.secondary,
	},
	iconBox2: {
		background: theme.palette.background.secondary,
		marginRight: '1em',
		width: '50px',
		height: '50px',
	},
	icon2: {
		color: theme.palette.accent.primary,
	},
	dataCardBody: {
		padding: '1em',
		background: theme.palette.background.primary,
		color: theme.palette.font.light,
		fontFamily: 'Roboto',
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
									<NoteIcon
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
						direction='column'
						xs={12}
						className={classes.dataCardBody}>
						<Grid item xs={12}>
							{/* The Author Item */}
							<ListItem>
								<ListItemAvatar>
									<Avatar className={classes.iconBox2}>
										<AssignmentIndIcon
											fontSize='large'
											className={classes.icon2}
										/>
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primaryTypographyProps={{
										style: listItemText.primaryDark,
									}}
									secondaryTypographyProps={{
										style: listItemText.secondaryLight,
									}}
									primary='Author'
									secondary='Some Author'
								/>
							</ListItem>

							{/* Visbitilty Item */}
							<ListItem>
								<ListItemAvatar>
									<Avatar className={classes.iconBox2}>
										<VisibilityIcon
											fontSize='large'
											className={classes.icon2}
										/>
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primaryTypographyProps={{
										style: listItemText.primaryDark,
									}}
									secondaryTypographyProps={{
										style: listItemText.secondaryLight,
									}}
									primary='Visibility'
									secondary='private'
								/>
							</ListItem>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
}

export default ComponentPriview;
