import '../viewGenerall.css'
import { useState } from 'react'
import PageInfo from '../../components/leftContainer/PageInfo'
import BattleFeild from '../../components/rightContainer/BattleFeild'
import { InfoModel } from '../../types/pageInfo/InfoModel'
import { battleInfo } from '../../pageInfoData/data'

const Battle = () => {
	const [data, /* setData */] = useState<InfoModel>(battleInfo)
	
	const stateHandler = () => {}

	return (
		<div className="main">
			<PageInfo data={data} stateHandler={stateHandler}/> 
			<BattleFeild/>
		</div>
	)
}

export default Battle