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

const useStyles = makeStyles((theme) => ({
	dataCardContainer: {
		margin: '1em',
		height: 'max-content',
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
	icon2: {
	},
	iconBox2: {
		marginRight: '1em',
		width: '50px',
		height: '50px',
	},
	dataCardBody: {
		padding: '1em',
		fontFamily: 'Roboto',
	},
	nameSelectorForm: {
		width: '100%',
		marginBottom: '10px',
	},
	nameSelector: {
		background: 'white',
		outline: 'none',
		border: 'none',
		'&focus': {
			outline: 'none',
			border: 'none',
		},
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

function SheetDataBlock(props) {
	const classes = useStyles();
	const sheetData = props.sheetData;
	let author = "";
	if(Object.keys(sheetData).length !== 0)
		author = sheetData.author.username;
	
	return (
		<Grid item xs={12} md={6} lg={4}>
			<Paper elevation={3} className={classes.dataCardContainer}>
				<Grid container direction='column' className={classes.dataCard}>
					<Grid item xs={12} className={classes.dataCardTitle}>
						{/* Sheet Name Item */}
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
								primary='Sheet Details'
								secondary={`${sheetData.filename}.css`}
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
									secondary={author}
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
									secondary={sheetData.isPublic?"Public":"Private"}
								/>
							</ListItem>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
}

export default SheetDataBlock;
