import './home.css'
import '../viewGenerall.css'
import PageInfo from '../../components/leftContainer/PageInfo'
import SiteTourInfo from '../../components/leftContainer/SiteTourInfo'
import BackgroundImg from '../../components/rightContainer/BackgroundImg'
import { useState } from 'react'
import { InfoModel } from '../../types/pageInfo/InfoModel'
import { homeInfo, tourInfo } from '../../pageInfoData/data'

const Home = () => {

	const [data, setData] = useState<InfoModel | InfoModel[]>(homeInfo)

	const swapInfo = () => {
		setData(tourInfo)
	}

	return (
		<div className="main">
			{
				Array.isArray(data) ?
				<SiteTourInfo data={data} /> :
				<PageInfo data={data} stateHandler={swapInfo}/>
			}
			<BackgroundImg />
		</div>
	)
}

export default Home