import './leftContainer.css'

const LeftContainer = () => {

	return (
		<section className="left-container">
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
	)
}

export default LeftContainer