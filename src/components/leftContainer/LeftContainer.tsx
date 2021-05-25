import './leftContainer.css'

const LeftContainer = () => {

	return (
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
	)
}

export default LeftContainer