import './primaryButton.css'

interface Props{
	text: string | null,
	classname: string,
	stateHandler: () => void
}

const PrimaryButton = ({text, classname, stateHandler}: Props) => {

	return (
		<button className={"btn primary " + classname} onClick={stateHandler}>
			{text}
		</button>
	)
}
export default PrimaryButton