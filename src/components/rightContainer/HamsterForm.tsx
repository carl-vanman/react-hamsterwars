import { useRef, useState, useEffect } from 'react'
import './hamsterForm.css'

interface Hamster {
	name: string,
	age: number,
	favFood: string,
	loves: string,
	imgName: string,
	games: number,
	defeats: number,
	wins: number
};
interface FormTarget {
	target: { 
		name: string,
		value: string
	}
}

interface ResponseData {
	id: string
}

const HamsterForm = () => {
	const cancelRef = useRef<any>(null)
	const [newHamsterObj, setNewHamsterObj] = useState<Hamster>({
		name: '',
		age: 0,
		favFood: '',
		loves: '',
		imgName: '',
		games: 0,
		defeats: 0,
		wins: 0
	})
	const [responseData, SetResponseData] = useState<undefined | ResponseData>(undefined)

	const updateNewHamster = ({ target: {name, value} }: FormTarget ) => {
		setNewHamsterObj({
		  ...newHamsterObj,
		  [name]: value
		});
	};

	const postHamster = async () => {
		const controller = new AbortController()
		const signal = controller.signal

		cancelRef.current = () => {
			controller.abort()
			cancelRef.current = null
		}
	
		try {
			const response = await fetch('/hamsters', {
				method: 'POST',
				signal,
				headers: {
					'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(newHamsterObj)
			})
			if( response.status === 200 ) {
				const data = await response.json()
				console.log(data)
				SetResponseData(data)
				cancelRef.current = null
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

	if(responseData){
		return (
			<section className="form right-container" style={{textAlign:"center"}}>
				<h1>Your hamster is added!</h1>
				<p>Click "back to gallery" and you will find him/ her there with the others</p>
				<button onClick={() => SetResponseData(undefined)}>back</button>
			</section>
		)
	} else {
		return (
			<section className="form right-container">
				<h1>/New hamster</h1>
					<div className="first-four">
						<label>
							Name
							<input 
							type="text"
							name="name"
							value={newHamsterObj.name}
							onChange={updateNewHamster}/>
						</label>
						<label>
							Age
							<input
							type="number"
							name="age"
							value={newHamsterObj.age}
							onChange={updateNewHamster}/>
						</label>
						<label>
							Fav food
							<input
							type="text"
							name="favFood"
							value={newHamsterObj.favFood}
							onChange={updateNewHamster}/>
						</label>
						<label>
							Loves
							<input
							type="text"
							name="loves"
							value={newHamsterObj.loves}
							onChange={updateNewHamster}/>
						</label>
					</div>
					<div>
						<img src={newHamsterObj.imgName} alt="hamster-img" width="200" height="auto"/>
					</div>
					<label>
						Image-url
						<input
						type="text"
						name="imgName"
						value={newHamsterObj.imgName}
						onChange={updateNewHamster}/>
					</label>
				{<button onClick={() => postHamster()}>Upload</button>}
			</section>
		)
	}
}

export default HamsterForm


/* 
 name validation:
 - not empty

 age valdiation:
 - no letter
 - not begin with 0 if more then 1 number
 - No 0.5, avrunda uppåt

Image-url: 
defaul url if empty ?
*/