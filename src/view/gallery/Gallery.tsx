import { useState } from 'react'
import PageInfo from '../../components/leftContainer/PageInfo'
import RightContainer from '../../components/rightContainer/RightContainer'
import '../viewGenerall.css'

interface PropsObj {
	topTitleWord: string | null,
	topSecTitleWord: string | null,
	secondaryTitle: string | null,
	paragraph : string | null,
	primaryButton: string | null,
	secondaryButton: string | null
}

/* Maybe change to first- / secondButton */
const galleryInfo = {
	topTitleWord: 'Hamster',
	topSecTitleWord: 'gallery',
	secondaryTitle: '/Gallery',
	paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat exercitationem obcaecati quasi laborum amet velit officiis eligendi corporis. Sunt officia iure neque reprehenderit quis? Quidem animi eligendi nulla. Recusandae, a!',
	primaryButton: 'create hamster',
	secondaryButton: null
}

const Gallery = () => {

	const [data, /* setData */] = useState<PropsObj>(galleryInfo)

	const stateHandler = () => {}

	return (
		<div className="main">
			<PageInfo data={data} stateHandler={stateHandler}/> 
			<RightContainer />
		</div>
	)
}

export default Gallery