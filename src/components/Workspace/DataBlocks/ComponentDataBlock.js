import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
	Avatar,
	Button,
	Grid,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
	MenuItem,
	FormControl,
	Select,
} from '@material-ui/core';
import ExtensionIcon from '@material-ui/icons/Extension';
import TuneIcon from '@material-ui/icons/Tune';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ColorizeIcon from '@material-ui/icons/Colorize';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import qs from 'querystring';

import CreateModal from './CreateModal';

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
		//color:'rgba(0,0,0,0.8)',
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
		// background: 'white',
		outline: 0,
		border: 'none',
		'&focus': {
			outline: 0,
			border: 'none',
		},
	},
	button: {
		width: '100%',
		transition: '0.5s',
		'&:hover': {
			backgroundImage:
				'linear-gradient(120deg, #84fab0 0%, #00356B 100%)',
			fontWeight: 'bold',
			transform: 'scale(1.05)',
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

function ComponentDataBlock(props) {
	const classes = useStyles();
	const {
		sheetId,
		sheetData,
		updateSheetData,
		activeComponent,
		updateActiveComponent,
		saveActiveComponent
	} = props;
	const [compName, setCompName] = useState(0);
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleCreateBlockFormSubmit = (newBlockName, type) => {		
		const formData = {
			blockName: type + newBlockName,
		};
		axios
			.post(
				`http://localhost:8000/api/sheet/block/new/${sheetId}`,
				qs.stringify(formData),
				{
					headers: {
						'Content-type': 'application/x-www-form-urlencoded',
					},
				}
			)
			.then((res) => {
				updateSheetData(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleDropDownChange = (event) => {
		updateActiveComponent(event.currentTarget.dataset.value);
		setCompName(event.target.value);
	};

	const getMenuOptions = () => {
		if (Object.keys(sheetData).length !== 0) {
			let htmlArr = sheetData.sheetData.map((block) => {
				return <MenuItem value={block._id}>{block.name}</MenuItem>;
			});
			return htmlArr;
		} else return [];
	};

	return (
		<Grid item xs={12} md={6} lg={4}>
			<Paper elevation={3} className={classes.dataCardContainer}>
				<Grid container direction='column' className={classes.dataCard}>
					<Grid item xs={12} className={classes.dataCardTitle}>
						{/* Component Name Item */}
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.iconBox}>
									<ExtensionIcon
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
								primary='Component Details'
								secondary={activeComponent.name}
							/>
						</ListItem>
					</Grid>
					<Grid
						item
						container
						direction='column'
						xs={12}
						className={classes.dataCardBody}>
						{/* The Type of component Item */}
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.iconBox2}>
									<TuneIcon
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
								primary='Type'
								secondary={activeComponent.type}
							/>
						</ListItem>

						{/*  Select Component Item*/}
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.iconBox2}>
									<ColorizeIcon
										fontSize='large'
										className={classes.icon2}
									/>
								</Avatar>
							</ListItemAvatar>
							{/* The Input */}
							<FormControl className={classes.nameSelectorForm}>
								<Select
									className={classes.nameSelector}
									disableUnderline
									IconComponent={ExpandMoreIcon}
									variant='outlined'
									value={compName}
									onChange={handleDropDownChange}>
									<MenuItem value={0} disabled>
										Select Component
									</MenuItem>
									{getMenuOptions()}
								</Select>
							</FormControl>
						</ListItem>

						{/* Create New Component */}
						<CreateModal
							open={open}
							handleOpen={handleOpen}
							handleClose={handleClose}
							handleCreateBlockFormSubmit={
								handleCreateBlockFormSubmit
							}
						/>

						{/* Buttons */}
						<ListItem>
							<Grid container justify='space-around'>
								<Grid item xs={5}>
									<Button
										variant='contained'
										size='large'
										startIcon={<AddIcon />}
										className={classes.button}
										onClick={handleOpen}>
										New
									</Button>
								</Grid>
								<Grid item xs={5}>
									<Button
										variant='contained'
										size='large'
										startIcon={<SaveIcon />}
										className={classes.button}
										onClick={saveActiveComponent}
										disabled={activeComponent.hasOwnProperty('default')}
										>
										Save
									</Button>
								</Grid>
							</Grid>
						</ListItem>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
}

export default ComponentDataBlock;
