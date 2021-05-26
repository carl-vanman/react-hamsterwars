import { useState } from 'react'
import './leftContainer.css'

interface PropsObj {
	topTitleWord: string | null,
	topSecTitleWord: string | null,
	secondaryTitle: string | null,
	paragraph : string | null,
	primaryButton: string | null,
	secondaryButton: string | null
}

interface Props {
	data: PropsObj[]
}

const SiteTourInfo = ({data}: Props) => {
	/* function that checks if paragraph has element in it? ex. <br /> */
	const [index, setIndex] = useState(0)
		
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
				<button 
				className={index === 0 ? "btn sec disable" : "btn sec"}
				onClick={() => setIndex(prev => prev - 1)}>
					{data[index].primaryButton}
				</button>
				<button 
				className={data.length - 1 === index ? "btn prime disable": "btn prime" }
				onClick={() => setIndex(prev => prev + 1)}>
					{data[index].secondaryButton}
				</button>
			</div>
			<div style={{ display:"flex", gap:"10px", alignItems:"center"}}>
				{data.map( (item) => {
					return (
						<div 
						key={item.secondaryTitle}
						className={data.indexOf(item) === index ? "currentPage": "notCurrentPage"} />
					)}
				)}
			</div>
		</section>
	)
}

export default SiteTourInfo