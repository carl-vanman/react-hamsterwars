import { useRef, useState, useEffect } from 'react'
import './hamsterForm.css'
import { HamsterNoId } from '../../types/hamster/HamsterNoId'

interface FormTarget {
	target: { 
		name: string,
		value: string | number
	}
}

interface ResponseData {
	id: string
}

const HamsterForm = () => {
	const cancelRef = useRef<any>(null)
	const [responseData, SetResponseData] = useState<undefined | ResponseData>(undefined)
	const [newHamsterObj, setNewHamsterObj] = useState<HamsterNoId>({
		name: '',
		age: 1,
		games: 0,
		loves: '',
		imgName: '',
		defeats: 0,
		wins: 0,
		favFood: ''
	})

	const updateNewHamster = ({ target: {name, value} }: FormTarget ) => {
		setErrorMessage({
			...errorMessage,
			name: "",
			age: "",
		})
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

	interface Validation {
		target: {
			name: string
			value: string | number
		}
	}

	const [errorMessage, setErrorMessage] = useState({
		name:"",
		age: ""
	})
	const [validName, setValidName] = useState(false)
	const [validAge, setValidAge] = useState(true)

	const validator = ({ target: {name, value} }: Validation ) => {
		let numbers = /[1-9 + , . - * @ $ % & # " ' ! ? = ( ) ]/g
		
		if(!newHamsterObj.age){
			setErrorMessage({
				...errorMessage,
				age: "Your age can not be 0 or lower."
			})
			setValidAge(false)
		} else if(newHamsterObj.name === value) {
			if(!value){
				setErrorMessage({
					...errorMessage,
					[name]: "You need to fill out a name."
				})
				setValidName(false)
			}else if(value.match(numbers)){
				setErrorMessage({
					...errorMessage,
					[name]: "No numbers or symbols in your name."
				})
				setValidName(false)
			}else {
				setErrorMessage({
				...errorMessage,
				[name]: ""
				})
				setValidName(true)
			}
		} else if(newHamsterObj.age === value){
			if(!value){
				setErrorMessage({
					...errorMessage,
					[name]: "You need to fill out a age."
				})
				setValidAge(false)
			}
			else if (value < 1){
				setErrorMessage({
					...errorMessage,
					[name]: "Your age can not be 0 or lower."
				})
				setValidAge(false)
			} else {
				//if I dont set value to number here it becomes a string
				setNewHamsterObj({
					...newHamsterObj,
					[name]: Number(value)
				})
				setErrorMessage({
					...errorMessage,
					[name]: ""
				})
				setValidAge(true)
			}
		// need to be there if first if statement kicks in
		} else {
			setValidName(true)
			setValidAge(true)
		}
	};


	if(responseData){
		return (
			<section className="form right-container" style={{textAlign:"center"}}>
				<h1>Your hamster is added!</h1>
				<p>Click "back to gallery" and you will find your hamster with the others</p>
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
						onBlur={validator}
						className={errorMessage.name ? "notValid": ""}
						onChange={updateNewHamster}/>
					{errorMessage.name && <p className="errorText">{errorMessage.name}</p>}
					</label>
					<label>
						Age
						<input
						type="number"
						name="age"
						value={Number(newHamsterObj.age)}
						onBlur={validator}
						className={errorMessage.age ? "notValid": ""}
						onChange={updateNewHamster}/>
					{errorMessage.age && <p className="errorText">{errorMessage.age}</p>}
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
				{<button 
				className={validAge && validName ? "" : "disable"}
				onClick={() => postHamster()}>Upload</button>}
			</section>
		)
	}
}

export default HamsterForm