import './card.css'

const Card = ({hamsterData, URL_IMG}: any) => (
		<div className="hamster-card">
			<div className="hamster-img"
			style={{backgroundImage:`url(${URL_IMG})`}}
			>
			</div>
			<h2>{hamsterData.name}</h2>
			<div className="hamster-info">
				<h2>Howdy!</h2>
				<p>My name is {hamsterData.name}.<br/>
				I'm {hamsterData.age} years old. On my spare time I love
				to {hamsterData.loves} and my favorite food is {hamsterData.favFood}
				</p>
			</div>
		</div>
	)

export default Card
