import './leftContainer.css'

type PropsObj = {
	topTitleWord: string | null,
	topSecTitleWord: string | null,
	secondaryTitle: string | null,
	paragraph : string | null,
	primaryButton: string | null,
	secondaryButton: string | null
}

interface Props {
	data: PropsObj,
	stateHandler: () => void
}

const PageInfo = ({data, stateHandler}: Props) => {
	/* function that checks if paragraph has element in it? ex. <br /> */
	return (
		<section className="left-container">
			<h1>
				<span>
					{data.topTitleWord}
				</span>
				<br/>
				{data.topSecTitleWord}
			</h1>
			<div>
				<h3>{data.secondaryTitle}</h3>
				<p>
					{data.paragraph}
				</p>
			</div>
			<div className="btn-container">
				{data.primaryButton && <button 
				className="btn sec"
				onClick={stateHandler}>
					{data.primaryButton}
				</button>}
				{ data.secondaryButton && 
				<button className="btn prime">
					{data.secondaryButton}
				</button>}
			</div>
		</section>
	)
}

export default PageInfo