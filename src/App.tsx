import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import Home from './views/home/Home';

function App() {
	return (
		<Router>
		<div className="App grid-container">
			<header className="header">
				<h1>Hamsterwars</h1>
				<Navigation />
			</header>
			<main className="page-main">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</main>
		</div>
		</Router>
	);
}

export default App;


/* 
activclass in NavLink

activeClassName={location.href !== "your pathname"? null : "nav-link-gdc-selected"} */

/* for home NavLink */
/* exact activeClassName="active" path="/" */