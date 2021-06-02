import './rightContainer.css'
import Card from '../card/Card';

interface Hamster {
	id: string,
	name: string,
	age: number,
	games: number,
	loves: string,
	imgName: string,
	defeats: number,
	wins: number,
	favfood: string
};

interface Props {
	dataDb: Hamster[] | undefined,
	fetchHandler: (id:string) => void
}

const HamsterGallery = ({dataDb, fetchHandler}: Props) => {

	if (!dataDb) {
		return (
			<section className="right-container">
				<h1>Loading...</h1>
			</section>
		);
	}
	return (
		<section className="right-container">
			
		{
			dataDb ? dataDb.map((hamster: Hamster ) => {
				let URL_IMG:string

				if( hamster.imgName.includes('http') ) {
					URL_IMG = hamster.imgName
				} else {
					URL_IMG = `/img/${hamster.imgName}`
				}

				return (
					<div key={hamster.id}>
						{dataDb && <button 
						onClick={() => fetchHandler(hamster.id)}>Delete</button>}
						<Card hamsterData={hamster} URL_IMG={URL_IMG} />
					</div>
				)
			}) : null
		}	

		</section>
	)
}

export default HamsterGallery