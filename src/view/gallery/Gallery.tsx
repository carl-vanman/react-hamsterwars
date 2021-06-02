import { useEffect, useState, /* useRef */ } from 'react'
import PageInfo from '../../components/leftContainer/PageInfo'
import HamsterForm from '../../components/rightContainer/HamsterForm'
import HamsterGallery from '../../components/rightContainer/HamsterGallery'
import '../viewGenerall.css'

const galleryInfo = {
	topTitleWord: 'Hamster',
	topSecTitleWord: 'gallery',
	secondaryTitle: '/Gallery',
	paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat exercitationem obcaecati quasi laborum amet velit officiis eligendi corporis. Sunt officia iure neque reprehenderit quis? Quidem animi eligendi nulla. Recusandae, a!',
	primaryButton: 'create hamster',
	secondaryButton: null
}
const createInfo = {
	topTitleWord: 'Create',
	topSecTitleWord: 'hamster',
	secondaryTitle: '/Create',
	paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat exercitationem obcaecati quasi laborum amet velit officiis eligendi corporis. Sunt officia iure neque reprehenderit quis? Quidem animi eligendi nulla. Recusandae, a!',
	primaryButton: 'back to gallery',
	secondaryButton: null
}

/* interface PropsObj {
	topTitleWord: string | null,
	topSecTitleWord: string | null,
	secondaryTitle: string | null,
	paragraph : string | null,
	primaryButton: string | null,
	secondaryButton: string | null
}

interface Hamster {
	id: string,
	name: string,
	age: number,
	games: number,
	loves: string,
	imgName: string,
	defeats: number,
	wins: number,
	favfood: string
};

interface Fetch {
	method: string,
	url: string
}

const Gallery = () => {
	const cancelRef = useRef<any>(null)
	const [data, setData ] = useState<PropsObj>(galleryInfo)
	const [dataDb, setDataDb] = useState<Hamster[] | undefined>(undefined);

	const stateHandler = () => {
		data.topTitleWord === 'Create'
		? setData(galleryInfo)
		: setData(createInfo)
	}

	const fetchHandler = async(id:string) => {
		try {
			await ajaxRequest({method: 'DELETE', url: `/hamsters/${id}`})
		} catch (error) {
			console.log(error)
		}
	}

	const hamsterDataBase = async() => {
		const hamsterData = await ajaxRequest({method: 'GET', url: '/hamsters'})
		setDataDb(hamsterData)
	}
	
	const ajaxRequest = async({method, url}: Fetch) => {
		const controller = new AbortController();
		const signal = controller.signal;
	
		cancelRef.current = () => {
			controller.abort()
			cancelRef.current = null
		}
	
		try {
			const response = await fetch(url, { method, signal })
			console.log(response)
			const data = await response.json();
			cancelRef.current = null
			return data;
		} catch (error) {
			if( error.name !== 'AbortError' ) {
				throw error;
			}
		}
	}
	
	hamsterDataBase()

	useEffect(() => {
		return () => {
			if( cancelRef.current ) {
				cancelRef.current();
			}
		};
	}, []);

	return (
		<div className="main">
			<PageInfo data={data} stateHandler={stateHandler}/> 
			<HamsterGallery dataDb={dataDb} fetchHandler={fetchHandler}/>
		</div>
	)
}

export default Gallery */

/* deletat hamster med ID 8DQfXxDuOzaQupErWTYQ, namn: skutte */

interface PropsObj {
	topTitleWord: string | null,
	topSecTitleWord: string | null,
	secondaryTitle: string | null,
	paragraph : string | null,
	primaryButton: string | null,
	secondaryButton: string | null
}

interface Hamster {
	id: string,
	name: string,
	age: number,
	games: number,
	loves: string,
	imgName: string,
	defeats: number,
	wins: number,
	favfood: string
};

interface Fetch {
	method: string,
	url: string
}

interface PromiseWithCancel<T> extends Promise<T> {
	cancel: () => void;
}
function getHamsters({method, url}: Fetch) {
	const controller = new AbortController();
	const signal = controller.signal;
	const promise = new Promise(async (resolve) => {
		try {
			const response = await fetch(url, {
				method: method,
				signal,
			});
			const data = await response.json();
			resolve(data);
		} catch (ex: unknown) {
			if (isAbortError(ex)) {
				console.log(ex.message);
			}
		}
	});
	(promise as PromiseWithCancel<Hamster[]>).cancel = () => controller.abort();
	return promise as PromiseWithCancel<Hamster[]>;
}

function isAbortError(error: any): error is DOMException {
	if (error && error.name === "AbortError") {
		return true;
	}
	return false;
}

const Gallery = () => {

	const [data, setData ] = useState<PropsObj>(galleryInfo)
	const [rightView, setRightView] = useState('gallery')
	const [fetchData, setFetchData] = useState<Fetch>( {method: 'GET', url: '/hamsters'} )

	const [dataDb, setDataDb] = useState<Hamster[] | undefined>(undefined);

	const stateHandler = () => {
		rightView === 'gallery'
		? setRightView('form')
		: setRightView('gallery')

		data.topTitleWord === 'Create'
		? setData(galleryInfo)
		: setData(createInfo)
	}
	
	const fetchHandler = async(id:string) => {
		try {
			const response = await fetch( `/hamsters/${id}`, { method: 'DELETE'} )
			if(response.status === 200 ){
				setFetchData({...fetchData,
				method: 'GET',
				url: '/hamsters'
				})
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const q = getHamsters(fetchData);
		q.then((HamsterList) => {
			setDataDb(HamsterList);
		});
		return () => q.cancel()
	}, [fetchData]);

	return (
		<div className="main">
			<PageInfo data={data} stateHandler={stateHandler}/> 
			{rightView === 'gallery'
			? <HamsterGallery dataDb={dataDb} fetchHandler={fetchHandler}/>
			: <HamsterForm />
			}
		</div>
	)
}

export default Gallery