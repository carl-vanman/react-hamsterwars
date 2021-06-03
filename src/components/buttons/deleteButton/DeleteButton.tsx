import './deleteButton.css'

interface Props{
	text:string,
	hamsterId: string,
	stateHandler: (id:string) => void
}

const DeleteButton = ({text, hamsterId, stateHandler}: Props) => {

	return (
		<button className={"btn delete"}
		onClick={() =>stateHandler(hamsterId)}>
			{text}
		</button>
	)
}

export default DeleteButton