import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
	Button,
	Backdrop,
	Fade,
	MenuItem,
	FormControl,
	Modal,
	Select,
	Typography,
	TextField,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
	nameSelectorForm: {
		width: '100%',
		marginBottom: '10px',
	},
	nameSelector: {
		// background: 'white',
		outline: 0,
		marginBottom: '1em',
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
		},
	},
	textField: {
		color: 'black',
		borderRadius: '8px',
		outline: 0,
		border: 'none',
		marginBottom: '1.5em',
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

function CreateModal(props) {
	const classes = useStyles();
	const [newBlockName, setNewBlockName] = useState('');
	const [type, setType] = useState(0);

	const {
		open,
		handleOpen,
		handleClose,
		handleCreateBlockFormSubmit,
	} = props;

	const handleNameInputChange = (e) => {
		setNewBlockName(e.target.value);
	};

	const handleDropDownChange = (event) => {
		setType(event.target.value);
	};

	return (
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
					<h1 className={classes.heading}>Make A New Style</h1>
					<FormControl className={classes.nameSelectorForm}>
						<Select
							className={classes.nameSelector}
							disableUnderline
							IconComponent={ExpandMoreIcon}
							variant='outlined'
							value={type}
							onChange={handleDropDownChange}>
							<MenuItem value={0} disabled>
								Select Type
							</MenuItem>
							<MenuItem value='.'>Class</MenuItem>
							<MenuItem value='#'>Id</MenuItem>
						</Select>
						<TextField
							id='outlined-basic'
							className={classes.textField}
							label='New Component Name'
							variant='outlined'
							onChange={handleNameInputChange}
						/>
						<Button
							variant='contained'
							startIcon={<AddIcon />}
							style={{ marginTop: '10px' }}
							className={classes.button}
							onClick={() => {
								handleCreateBlockFormSubmit(newBlockName, type);
								handleClose();
							}}>
							Create
						</Button>
					</FormControl>
				</div>
			</Fade>
		</Modal>
	);
}

export default CreateModal;
