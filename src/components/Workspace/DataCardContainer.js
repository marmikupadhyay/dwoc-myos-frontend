import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';
import SheetDataBlock from './DataBlocks/SheetDataBlock';
import ComponentDataBlock from './DataBlocks/ComponentDataBlock';
import ComponentPriview from './DataBlocks/ComponentPreview';

const useStyles = makeStyles((theme) => ({
	mainBox: {
		marginTop: '1em',
		background: theme.palette.background.secondary,
	},
	categoryBox: {
		margin: '1em',
	},
	categoryCardContainer: {
		padding: '1em',
	},
}));

function DataCardContainer() {
	const classes = useStyles();

	return (
		<Grid container className={classes.mainBox} direction='column'>
			<Grid container item justify='space-around'>
				{/* The Sheet Details Block */}
				<SheetDataBlock />

				{/* The Single Item Details Block */}
				<ComponentDataBlock />

				{/* The Code Preview Block */}
				<ComponentPriview />
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
