import { useState } from 'react'
import './leftContainer.css'
import { InfoModel } from '../../types/pageInfo/InfoModel'
import SecondaryButton from '../buttons/secondaryButton/SecondaryButton'
import PrimaryButton from '../buttons/primaryButton/PrimaryButton'
import DotPagePreview from '../dotPagePreview/DotPagePreview'

interface Props {
	data: InfoModel[]
}

const SiteTourInfo = ({data}: Props) => {
	const [index, setIndex] = useState(0)
		
	const prevPage = () => setIndex(prev => prev - 1)
	const nextPage = () => setIndex(prev => prev + 1)
	return (
		<section className="left-container">
			<h1>
				<span>
					{data[index].topTitleWord}
				</span>
				<br/>
				{data[index].topSecTitleWord}
			</h1>
			<div>
				<h3>{data[index].secondaryTitle}</h3>
				<p>
					{data[index].paragraph}
				</p>
			</div>
			<div className="btn-container">
				<SecondaryButton
					text={data[index].primaryButton}
					classname={index === 0 ? "disable" : ""}
					stateHandler={prevPage}
				/>
				<PrimaryButton 
					text={data[index].secondaryButton}
					classname={data.length - 1 === index ? "disable": "" }
					stateHandler={nextPage}
				/>
			</div>
			<DotPagePreview data={data} index={index}/>
		</section>
	)
}

export default SiteTourInfo