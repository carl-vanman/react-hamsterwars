import { useState } from 'react'
import PageInfo from '../../components/leftContainer/PageInfo'
import BattleFeild from '../../components/rightContainer/BattleFeild'
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
const battleInfo = {
	topTitleWord: 'Hamster',
	topSecTitleWord: 'Battle',
	secondaryTitle: '/Battle',
	paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat exercitationem obcaecati quasi laborum amet velit officiis eligendi corporis. Sunt officia iure neque reprehenderit quis? Quidem animi eligendi nulla. Recusandae, a!',
	primaryButton: null,
	secondaryButton: null
}

const Battle = () => {
	const [data, /* setData */] = useState<PropsObj>(battleInfo)
	
	const stateHandler = () => {}

	return (
		<div className="main">
			<PageInfo data={data} stateHandler={stateHandler}/> 
			<BattleFeild/>
		</div>
	)
}

export default Battle