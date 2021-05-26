import './home.css'
import '../viewGenerall.css'
import PageInfo from '../../components/leftContainer/PageInfo'
import SiteTourInfo from '../../components/leftContainer/SiteTourInfo'
import BackgroundImg from '../../components/rightContainer/BackgroundImg'
import { useState } from 'react'

interface PropsObj {
	topTitleWord: string | null,
	topSecTitleWord: string | null,
	secondaryTitle: string | null,
	paragraph : string | null,
	primaryButton: string | null,
	secondaryButton: string | null
}

/* Maybe change to first- / secondButton */
const homeInfo = {
	topTitleWord: 'Howdy',
	topSecTitleWord: 'friend!',
	secondaryTitle: '/Home',
	paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat exercitationem obcaecati quasi laborum amet velit officiis eligendi corporis. Sunt officia iure neque reprehenderit quis? Quidem animi eligendi nulla. Recusandae, a!',
	primaryButton: 'site tour',
	secondaryButton: null
}

const tourInfo = [
	{
		topTitleWord: 'Site',
		topSecTitleWord: 'tour!',
		secondaryTitle: '/Meny',
		paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat exercitationem obcaecati quasi laborum amet velit officiis eligendi corporis. Sunt officia iure neque reprehenderit quis? Quidem animi eligendi nulla. Recusandae, a!',
		primaryButton: 'prev',
		secondaryButton: 'next'
	},
	{
		topTitleWord: 'Site',
		topSecTitleWord: 'tour!',
		secondaryTitle: '/Battle',
		paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat exercitationem obcaecati quasi laborum amet velit officiis eligendi corporis. Sunt officia iure neque reprehenderit quis? Quidem animi eligendi nulla. Recusandae, a!',
		primaryButton: 'prev',
		secondaryButton: 'next'
	},
	{
		topTitleWord: 'Site',
		topSecTitleWord: 'tour!',
		secondaryTitle: '/Gallery',
		paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat exercitationem obcaecati quasi laborum amet velit officiis eligendi corporis. Sunt officia iure neque reprehenderit quis? Quidem animi eligendi nulla. Recusandae, a!',
		primaryButton: 'prev',
		secondaryButton: 'next'
	}
]

const Home = () => {

	const [data, setData] = useState<PropsObj | PropsObj[]>(homeInfo)

	const stateHandler = () => {
		setData(tourInfo)
	}

	return (
		<div className="main">
			{
				Array.isArray(data) ?
				<SiteTourInfo data={data} /> :
				<PageInfo data={data} stateHandler={stateHandler}/>
			}
			<BackgroundImg />
		</div>
	)
}

export default Home