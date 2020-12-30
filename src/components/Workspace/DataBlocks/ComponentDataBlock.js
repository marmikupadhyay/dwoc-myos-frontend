import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
	Avatar,
	Button,
	Backdrop,
	Fade,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
	MenuItem,
	FormControl,
	Modal,
	Select,
	Typography,
	TextField,
} from '@material-ui/core';
import ExtensionIcon from '@material-ui/icons/Extension';
import TuneIcon from '@material-ui/icons/Tune';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ColorizeIcon from '@material-ui/icons/Colorize';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';

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
	nameSelectorForm: {
		width: '100%',
		marginBottom: '10px',
	},
	nameSelector: {
		background: 'white',
		outline: 0,
		border: 'none',
		'&focus': {
			outline: 0,
			border: 'none',
		},
	},
	//The Modal Styles
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(3),
		outline: 0,
		border: 'none',
	},
	heading: {
		fontFamily: 'Roboto',
		padding: '.5em',
		paddingBottom: '0.25em',
		position: 'relative',
		marginBottom: '1em',
		'&::after': {
			content: "' '",
			position: 'absolute',
			width: '50%',
			height: '2px',
			bottom: '0',
			left: '0',
			borderBottom: `3px solid ${theme.palette.accent.primary}`,
		},
	},
	textField: {
		backgroundColor: 'white',
		borderRadius: '8px',
		outline: 0,
		border: 'none',
		marginBottom: '1.5em',
	},
	button: {
		background: theme.palette.accent.secondary,
		width: '100%',
		transition: '0.5s',
		'&:hover': {
			backgroundImage:
				'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
			fontWeight: 'bold',
			color: theme.palette.accent.primary,
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

function ComponentDataBlock() {
	const classes = useStyles();

	const [compName, setCompName] = React.useState(0);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (event) => {
		setCompName(event.target.value);
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
								secondary='class'
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
									onChange={handleChange}>
									<MenuItem value={0} disabled>
										Select Component
									</MenuItem>
									<MenuItem value={1}>Sketch</MenuItem>
									<MenuItem value={2}>Photoshop</MenuItem>
									<MenuItem value={3}>Framer</MenuItem>
								</Select>
							</FormControl>
						</ListItem>

						{/* Create New Component */}
						<Modal
							open={open}
							onClose={handleClose}
							closeAfterTransition
							BackdropComponent={Backdrop}
							BackdropProps={{
								timeout: 500,
							}}
							aria-labelledby='simple-modal-title'
							aria-describedby='simple-modal-description'>
							<Fade in={open}>
								<div className={classes.paper}>
									{/* The Input */}
									<h1 className={classes.heading}>
										Make A New Style
									</h1>
									<FormControl
										className={classes.nameSelectorForm}>
										<TextField
											id='outlined-basic'
											className={classes.textField}
											label='New Component Name'
											variant='outlined'
										/>
										<Button
											variant='contained'
											startIcon={<AddIcon />}
											style={{ marginTop: '10px' }}
											className={classes.button}
											onClick={handleOpen}>
											Create
										</Button>
									</FormControl>
								</div>
							</Fade>
						</Modal>

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
										className={classes.button}>
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
