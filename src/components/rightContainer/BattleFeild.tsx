import './rightContainer.css'
import { useEffect, useRef, useState } from 'react'
import Card from '../card/Card';
import { Hamster } from '../../types/hamster/Hamster'
import SecondaryButton from '../buttons/secondaryButton/SecondaryButton';

const BattleFeild = () => {
	const cancelRef = useRef<any>(null)
	const [status, setStatus] = useState<"loading" | "loaded">("loaded");
	const [responseData, setResponseData] = useState<Hamster[] | undefined>(undefined)
	const [show, setShow] = useState(false)

	const postMatch = async(winnerId:string) => {
		let postBody;
		const loser = responseData
		? responseData.find(hamster => hamster.id !== winnerId)
		: "";
		
		if(loser){
			postBody = {
				winnerId,
				loserId: loser.id
			}
		}
		
		const URLS = postBody ? [`/hamsters/${postBody.winnerId}`, `/hamsters/${postBody.loserId}`] : []

		const controller = new AbortController()
		const signal = controller.signal
		
		cancelRef.current = () => {
			controller.abort()
			cancelRef.current = null
		}
		try {
			const response = await fetch('/matches', {
				method: 'POST',
				signal,
				headers: {
					'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(postBody)
			})
			if( response.status === 200 ) {
				//setMatchDone
				cancelRef.current = null
				getHamster(URLS)
			}
		} catch (error) {
			console.log(error)
		}

	}

	const getHamster = async(URLS:string[]) => {
		setStatus('loading')
		const controller = new AbortController()
		const signal = controller.signal

		cancelRef.current = () => {
			controller.abort()
			cancelRef.current = null
		}
		try {
			const responses = await Promise.all(URLS.map(async (url) => {
					return await fetch(url, {method: 'GET', signal})	
			}))
			const data = await Promise.all(responses.map(async (response) => {
				if(response.status === 200 ){
					return await response.json()
				} 
			}))
			setResponseData(data)
			setStatus('loaded')
			setShow(true)
			cancelRef.current = null
		} catch (error) {
			console.log(error)
		}
	}

	const callReload = () => {
		getRandomHamster()
	}

	const getRandomHamster = async() => {

		const URLS = ['/hamsters/random', '/hamsters/random',]

		setShow(false)
		setStatus('loading')
		const controller = new AbortController()
		const signal = controller.signal

		cancelRef.current = () => {
			controller.abort()
			cancelRef.current = null
		}
		try {
			const responses = await Promise.all(URLS.map(async (url) => {
					return await fetch(url, {method: 'GET', signal})	
			}))
			const data = await Promise.all(responses.map(async (response) => {
				if(response.status === 200 ){
					return await response.json()
				} 
			}))
			if(data[0].id === data[1].id){
				cancelRef.current = null
				callReload()
			}else{
				cancelRef.current = null
				setResponseData(data)
				setStatus('loaded')
			}
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		return () => {
			if( cancelRef.current ) {
				cancelRef.current();
			}
		};
	}, []);

	if (status === "loading") {
		return (
			<section className="right-container">
				<h1 className="loading">Loading...</h1>
			</section>
		);
	}
	return (
		<section className="right-container">
		{!responseData && 
			<SecondaryButton text="Start match"
			classname={"start-match"}
			stateHandler={() => getRandomHamster()}/>
		}
		{
			responseData ? responseData.map((hamster: Hamster ) => {
				const URL_IMG = `/img/${hamster.imgName}`
				return (
					<div key={hamster.id}>
						<Card hamsterData={hamster} URL_IMG={URL_IMG}  />
						{!show && <SecondaryButton text="Cutest"
						classname={"width"}
						stateHandler={() =>postMatch(hamster.id)}/>}
						{show && 
							<div>
								<h4>Wins:</h4><p>{hamster.wins}</p>
								<h4>Defeats:</h4><p>{hamster.defeats}</p>
								<h4>Matches:</h4><p>{hamster.games}</p>
							</div>
						}
					</div>
				)
			}) : null
		}
		{show &&
			<SecondaryButton text="start new match"
			classname={"start-match"}
			stateHandler={() => getRandomHamster()}/>
		}
		</section>
	)
}

export default BattleFeild