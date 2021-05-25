import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import Battle from './view/battle/Battle';

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
					<Route exact path="/battle">
						<Battle />
					</Route>
					<Route exact path="/">
						<Battle />
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