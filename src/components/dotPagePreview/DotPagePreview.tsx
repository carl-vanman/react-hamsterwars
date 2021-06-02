import { InfoModel } from '../../types/pageInfo/InfoModel'
import './dotPagePreview.css'

interface Props {
	data: InfoModel[],
	index: number
}

const DotPagePreview = ({data, index}: Props) => {

	return (
		<div className="dot-container">
			{data.map( (item) => {
				return (
					<div 
					key={item.secondaryTitle}
					className={data.indexOf(item) === index ? "currentPage": "notCurrentPage"} />
				)}
			)}
		</div>
	)
}

export default DotPagePreview