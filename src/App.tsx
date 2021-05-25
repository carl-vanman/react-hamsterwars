import './App.css';
import {BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';

function App() {
	return (
		<Router>
		<div className="App grid-container">
			<header className="header">
				<h1>Hamsterwars</h1>
				<Navigation />
			</header>
			<main className="page-main">
				<section className="aside">
					<h1>
						<span>
							Howdy
						</span>
						<br/>
						friend!
					</h1>
					<div>
						<h3>/Header</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione ipsa doloremque delectus eos numquam minima 
						</p>
						<br/>
						<p>
							voluptatem corrupti, minus deserunt animi qui consequuntur rerum incidunt. Sunt molestias voluptate voluptas necessitatibus!
						</p>
					</div>
					<div className="btn-container">
						<button className="btn sec">start</button>
						<button className="btn prime">site tour</button>
					</div>
					<div>
						dotted preview for state site tour
					</div>
				</section>
				<section className="main">
					<div className="hamster-card">
						<div className="hamster-img"
						style={{ display:"grid", placeItems:"center", color:"#202124"}}
						>
							photo
						</div>
						<div className="text">
							<h4>Namn </h4>
							<button>more</button>
						</div>
					</div>
					<div className="hamster-card">
						<div className="hamster-img"
						style={{ display:"grid", placeItems:"center", color:"#202124"}}
						>
							photo
						</div>
						<div className="text">
							<h4>Namn</h4>
							<button>more</button>
						</div>
					</div>
				</section>
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