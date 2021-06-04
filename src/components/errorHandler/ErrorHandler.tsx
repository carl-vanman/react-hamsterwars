import './errorHandler.css'

interface Props {
	errorMessage: string
}

const ErrorHandler = ({errorMessage}: Props) => (
	<div className="error-handler">
		<div className="text-container">
			<h1>{errorMessage}</h1>
		</div>
	</div>
)

export default ErrorHandler