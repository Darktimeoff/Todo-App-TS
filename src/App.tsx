import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<div className="container">
				<Switch>
					<Route exact path="/"  component={TodosPage} />
					<Route path="/about" component={AboutPage} />
					<Redirect to='/' />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
