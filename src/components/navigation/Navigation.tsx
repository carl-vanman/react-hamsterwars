import { NavLink } from 'react-router-dom'
import './navigation.css'

const Navigation = () => {

	return (
		<nav className="header-nav">
			<NavLink
				exact
				activeClassName="active"
				to="/history"
			>History
			</NavLink>
			<NavLink
				exact
				activeClassName="active"
				to="/statistics"
			>Statistics
			</NavLink>
			<NavLink
				exact
				activeClassName="active"
				to="/gallery"
			>Gallery
			</NavLink>
			<NavLink
				exact
				activeClassName="active"
				to="/battle"
			>Battle
			</NavLink>
			<NavLink
				exact
				activeClassName="active"
				to="/"
			>Home
			</NavLink>
		</nav>
	)
}

export default Navigation