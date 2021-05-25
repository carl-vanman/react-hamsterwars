import './home.css'
import LeftContainer from '../../components/leftContainer/LeftContainer'
import RightContainer from '../../components/rightContainer/RightContainer'

const Home = () => {

	return (
		<div className="home-page-main">
			<RightContainer />
			<LeftContainer />
		</div>
	)
}

export default Home