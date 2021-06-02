import './secondaryButton.css'

interface Props{
	text: string | null,
	classname: string,
	stateHandler: () => void
}

const SecondaryButton = ({text, classname, stateHandler}: Props) => {

	return (
		<button className={"btn secondary " + classname} onClick={stateHandler}>
			{text}
		</button>
	)
}
export default SecondaryButton