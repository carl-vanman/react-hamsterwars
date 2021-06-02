import './leftContainer.css'
import { InfoModel } from '../../types/pageInfo/InfoModel'
import PrimaryButton from '../buttons/primaryButton/PrimaryButton'

interface Props {
	data: InfoModel,
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
				{ data.primaryButton &&
					<PrimaryButton 
						text={data.primaryButton} classname={""} stateHandler={stateHandler}
					/>
				}
			</div>
		</section>
	)
}

export default PageInfo