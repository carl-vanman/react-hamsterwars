import './card.css'

const Card = ({hamsterData, URL_IMG}: any) => {

	return (
		<div className="hamster-card">
			<div className="hamster-img"
			style={{backgroundImage:`url(${URL_IMG})`}}
			>
			</div>
			<div className="text">
				<h4>{hamsterData.name} </h4>
			</div>
			<div className="hamster-info">
				<h4>Howdy!</h4>
				<p style={{color:"white"}}>My name is {hamsterData.name}.<br/>
				I'm {hamsterData.age} years old. On my spare time I love
				to {hamsterData.loves} and my favorite food is {hamsterData.favFood}
				</p>

				{/* <h2>Name:</h2><h4>{hamsterData.name}</h4>
				<h2>Age:</h2><h4>{hamsterData.age}</h4>
				<h2>Loves:</h2><h4>{hamsterData.loves}</h4>
				<h2>Fav food:</h2><h4>{hamsterData.favFood}</h4> */}
			</div>
		</div>
	)
}

export default Card
