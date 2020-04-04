import React from  'react';
import { STATE_LOGIN, STATE_SIGNUP } from './components/AuthForm';
import GAListener from './components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from './components/Layout';
import PageSpinner from './components/PageSpinner';
import AuthPage from './pages/AuthPage';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
const AlertPage = React.lazy(() => import('./pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('./pages/AuthModalPage'));

import DashboardPage from'./pages/DashboardPage';

class App extends React.Component{
	render() {
		return (
			<BrowserRouter basename={'/'} >
				<GAListener>
					<Switch>
						<LayoutRoute
						exact
						path="/login"
						layout={EmptyLayout}
						component={props => (
							<AuthPage {...props} authState={STATE_LOGIN} />
						)}
						/>
						<LayoutRoute
						exact
						path="/signup"
						layout={EmptyLayout}
						component={props => (
							<AuthPage {...props} authState={STATE_SIGNUP} />
						)}
						/>

						<MainLayout breakpoint={this.props.breakpoint}>
						<React.Suspense fallback={<PageSpinner />}>
							<Route exact path="/" component={DashboardPage} />
						</React.Suspense>
						</MainLayout>
						<Redirect to="/" />
					</Switch>
				</GAListener> 
			</BrowserRouter>
		)
  	}
}

function Home (){
	<h1>Hoal</h1>
}

const query = ({ width }) => {
	if (width < 575) {
	  return { breakpoint: 'xs' };
	}
  
	if (576 < width && width < 767) {
	  return { breakpoint: 'sm' };
	}
  
	if (768 < width && width < 991) {
	  return { breakpoint: 'md' };
	}
  
	if (992 < width && width < 1199) {
	  return { breakpoint: 'lg' };
	}
  
	if (width > 1200) {
	  return { breakpoint: 'xl' };
	}
  
	return { breakpoint: 'xs' };
  };

export default componentQueries(query)(App);
