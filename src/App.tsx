import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import Battle from './view/battle/Battle';
import Home from './view/home/Home';
import Gallery from './view/gallery/Gallery';

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
					<Route exact path="/gallery">
						<Gallery />
					</Route>
					<Route exact path="/battle">
						<Battle />
					</Route>
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