import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import Battle from './view/battle/Battle';
import Home from './view/home/Home';
import Gallery from './view/gallery/Gallery';
import { useEffect, useRef, useState } from 'react';
import ErrorHandler from './components/errorHandler/ErrorHandler';

function App() {
	const cancelRef = useRef<any>(null)
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
	const connectionTester = async() => {
		const controller = new AbortController()
		const signal = controller.signal
		cancelRef.current = () => {
			controller.abort()
			cancelRef.current = null
		}
		try {
			const response = await fetch('/hamsters/random', {method: 'GET', signal})
			let status = response.status

			if(status === 200) {
				console.log('Connected to server')
				cancelRef.current = null
			}else if(status === 500 ){
				throw new Error('Ups! Not able to connect with server atm. Please try to refresh the page in a moment.')
			}
		} catch (error) {
			setErrorMessage(error.message)
		}
	}
	connectionTester()

		return () => {
			if( cancelRef.current ) {
				cancelRef.current();
			}
		};
	}, [])

	return (
		<Router>
		{ errorMessage && <ErrorHandler errorMessage={errorMessage}/> }
		<div className="App grid-container">
			<header className="header">
				<h1>Hamsterwars</h1>
				<Navigation />
			</header>
			<main className="page-main">
				<Switch>
					<Route exact path="/gallery">
						<Gallery />
					</Route>
					<Route exact path="/battle">
						<Battle />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</main>
		</div>
		</Router>
	);
}

export default App;