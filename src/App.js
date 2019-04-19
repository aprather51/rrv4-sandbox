import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Navs from './components/Navs';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

//style
import './assets/main.scss';

export default class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<React.Fragment>
					<Navs />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route component={Error} />
						</Switch>
					</div>
				</React.Fragment>
			</Router>
		);
	}
}
