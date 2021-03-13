import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Sidebar from '../Common/Sidebar';
import Topbar from '../Common/Topbar';
import DataCardContainer from './DataCardContainer';
import axios from 'axios';
import qs from 'querystring';

const useStyles = makeStyles((theme) => ({
	mainBox: {
		minHeight: '100vh',
	},
	container: {
		paddingTop: '3.5em',
	},
	contentSection: {
		marginLeft: '60px',
	},
}));

function Workspace(props) {
	const { sheetId } = props;
	const [sheetData, setSheetData] = useState({});
	const [activeComponent, setActiveComponent] = useState({
		name: 'Please Select A Component',
		type: 'none',
		default: 'yes',
	});

	const updateSheetData = (data) => {
		setSheetData(data);
	};

	const updateActiveComponent = (id) => {
		let comp = sheetData.sheetData.find((x) => x._id === id);
		if (comp.name[0] == '.') comp.type = 'Class';
		else if (comp.name[0] == '#') comp.type = 'Id';
		setActiveComponent(comp);
	};

	const saveActiveComponent = () => {
		let formData = activeComponent;
		let data = {data:JSON.stringify(formData)};
		axios
			.post(
				`http://localhost:8000/api/sheet/block/edit`,
				qs.stringify(data),
				{
					headers: {
						'Content-type': 'application/x-www-form-urlencoded',
					},
				}
			)
			.then((res) => {
				updateActiveComponent(res.data.data._id);
				let newSheetData = sheetData;
				Object.assign(
					newSheetData.sheetData.find(
						(b) => b._id === activeComponent._id
					),
					activeComponent
				);
				setSheetData(newSheetData);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		axios({
			method: 'GET',
			url: `http://localhost:8000/api/sheet/${sheetId}`,
		})
			.then((response) => {
				setSheetData(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const classes = useStyles();
	return (
		<div className={classes.mainBox}>
			<Topbar title='Workspace' />
			<Grid container className={classes.container}>
				<Sidebar />
				<Grid
					item
					container
					direction='column'
					className={classes.contentSection}>
					<Grid item xs={12}>
						<DataCardContainer
							sheetData={sheetData}
							updateSheetData={updateSheetData}
							activeComponent={activeComponent}
							updateActiveComponent={updateActiveComponent}
							saveActiveComponent={saveActiveComponent}
							sheetId={sheetId}	
						/>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Workspace;
