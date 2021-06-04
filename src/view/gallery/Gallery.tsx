import '../viewGenerall.css'
import { useEffect, useState, useRef } from 'react'
import PageInfo from '../../components/leftContainer/PageInfo'
import HamsterForm from '../../components/rightContainer/HamsterForm'
import HamsterGallery from '../../components/rightContainer/HamsterGallery'
import { galleryInfo, createInfo } from '../../pageInfoData/data'
import { InfoModel } from '../../types/pageInfo/InfoModel'
import { Hamster } from '../../types/hamster/Hamster'

const Gallery = () => {
	const cancelRef = useRef<any>(null)
	const [database, setDatabase] = useState<Hamster[] | undefined>(undefined);
	const [reload, setReload] = useState(true)
	const [data, setData ] = useState<InfoModel>(galleryInfo)
	const [rightView, setRightView] = useState('gallery')

	const swapInfo = () => {
		if(rightView === 'form'){
			setReload(true)
		}
		rightView === 'gallery' ? setRightView('form'): setRightView('gallery')
		
		data.topTitleWord === 'Create'? setData(galleryInfo): setData(createInfo)
	}

	const deleteHamster = async(id:string) => {
		const controller = new AbortController()
		const signal = controller.signal
		cancelRef.current = () => {
			controller.abort()
			cancelRef.current = null
		}
		try {
			const response = await fetch( `/hamsters/${id}`, { method: 'DELETE', signal} )
			if(response.status === 200 ){
				console.log('hamster deleted')
				cancelRef.current = null
				setReload(true)
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const getHamsters = async() => {
			const controller = new AbortController()
			const signal = controller.signal
			cancelRef.current = () => {
				controller.abort()
				cancelRef.current = null
			}
			try {
				const response = await fetch('/hamsters', {method: 'GET', signal})
				if(response.status === 200) {
					const data = await response.json()
					cancelRef.current = null
					setDatabase(data)
					setReload(false)
				}else{
					setReload(false)
					throw new Error('something went wrong')
				}
			} catch (error) {
				console.log(error.message)
			}
		}
		if(reload) {
			getHamsters()
		}
		return () => {
			if(cancelRef.current){
				cancelRef.current()
			}
		}
	}, [reload])

	return (
		<div className="main">
			<PageInfo data={data} stateHandler={swapInfo}/> 
			{rightView === 'gallery'
			? <HamsterGallery dataDb={database} fetchHandler={deleteHamster}/>
			: <HamsterForm />
			}
		</div>
	)
}

export default Gallery