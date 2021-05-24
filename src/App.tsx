import './App.css';

function App() {
	return (
		<div className="App grid-container">
			<header className="page-header">
				<h1>Hamsterwars</h1>
				<nav className="header-nav">
					<a href="#">History</a>
					<a href="#">Statistics</a>
					<a href="#">Gallery</a>
					<a href="#">Battle</a>
					<a className="active" href="#">Home</a>
				</nav>
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
					<div className="hamster-preview">
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
					<div className="hamster-preview">
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
					<div className="hamster-preview">
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
					<div className="hamster-preview">
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
					<div className="hamster-preview">
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
					<div className="hamster-preview">
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
	);
}

export default App;
