import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Workspace from './components/Workspace/Workspace';
import Feed from './components/Feed/Feed';
import Loginpage from './components/Auth/Loginpage';

const theme = createMuiTheme({
	palette: {
	  type: "dark",
	  primary:{
		light:'#00ff7f',
		main:'#14eb7f',
		dark: '#27d87f'
	},
	typography: {
		fontFamily: 'Poppins'
	}
	},
  });

function App() {
	// Simulating Auth Check For Now
	const isLoggedIn = true;

	return (
		 <ThemeProvider theme={theme}>
			 <CssBaseline />
			<div className='App'>
				<Router>
					<Switch>
						<Route path='/login' component={Loginpage} />
						<Route path='/dashboard' component={Dashboard} />
						<Route path='/workspace' component={Workspace} />
						<Route path='/feed' component={Feed} />
						<Route
							path='/'
							render={() =>
								isLoggedIn ? (
									<Redirect to='/dashboard' />
								) : (
									<Redirect to='/login' />
								)
							}
						/>
					</Switch>
				</Router>
			</div>
		 </ThemeProvider>
	);
}

export default App;
