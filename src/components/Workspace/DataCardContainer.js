import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';
import SheetDataBlock from './DataBlocks/SheetDataBlock';
import ComponentDataBlock from './DataBlocks/ComponentDataBlock';
import ComponentPreview from './DataBlocks/ComponentPreview';

const useStyles = makeStyles((theme) => ({
	mainBox: {
		marginTop: '1em',
	},
	categoryBox: {
		margin: '1em',
	},
	categoryCardContainer: {
		padding: '1em',
	},
}));

function DataCardContainer(props) {
	const classes = useStyles();
	const { sheetId, sheetData, updateSheetData, activeComponent, updateActiveComponent, saveActiveComponent } = props;
	return (
		<Grid container className={classes.mainBox} direction='column'>
			<Grid container item justify='space-around'>
				{/* The Sheet Details Block */}
				<SheetDataBlock sheetData={sheetData} />

				{/* The Single Item Details Block */}
				<ComponentDataBlock
					sheetData={sheetData}
					updateSheetData={updateSheetData}
					activeComponent={activeComponent}
					updateActiveComponent={updateActiveComponent}
					saveActiveComponent={saveActiveComponent}
					sheetId={sheetId}
				/>

				{/* The Code Preview Block */}
				<ComponentPreview activeComponent={activeComponent} sheetData={sheetData} />
			</Grid>
			<Grid container item>
				<Grid item xs={12} className={classes.categoryBox}>
					<Paper
						elevation={3}
						className={classes.categoryCardContainer}>
						Um
					</Paper>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default DataCardContainer;
