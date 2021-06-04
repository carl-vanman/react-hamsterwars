import './rightContainer.css'
import Card from '../card/Card';
import { Hamster } from '../../types/hamster/Hamster'
import DeleteButton from '../buttons/deleteButton/DeleteButton';

interface Props {
	dataDb: Hamster[] | undefined,
	fetchHandler: (id:string) => void
}

const HamsterGallery = ({dataDb, fetchHandler}: Props) => {

	if (!dataDb) {
		return (
			<section className="right-container">
				<h1 className="loading">Loading...</h1>
			</section>
		);
	}
	return (
		<section className="right-container">
			{
				dataDb ? dataDb.map((hamster: Hamster ) => {
					let URL_IMG:string = `/img/${hamster.imgName}`

					if( hamster.imgName.includes('http') ) {
						URL_IMG = hamster.imgName
					} else if(hamster.imgName.includes('/img/')){
						URL_IMG = hamster.imgName
					}
					
					return (
						<div key={hamster.id}>
							<Card hamsterData={hamster} URL_IMG={URL_IMG} />
							{ dataDb &&
								<DeleteButton
									text={'delete'} 
									hamsterId={hamster.id}
									stateHandler={fetchHandler}
								/>
							}
						</div>
					)
				}) : null
			}	
		</section>
	)
}

export default HamsterGallery