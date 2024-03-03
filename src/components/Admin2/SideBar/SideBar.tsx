import './SideBar.css'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
	return (
		<div className="sidebar col" >
			<NavLink to="/admin/cars">Arabalar</NavLink>
			<NavLink to="/admin/models">Modeller</NavLink>
			<NavLink to="/admin/colors">Renkler</NavLink>
			<NavLink to="/admin/brands">Markalar</NavLink>
			<NavLink to="/admin/customers">Müşteriler</NavLink>
			<NavLink to="/admin/rentals">Kiralamalar</NavLink>		
		</div>
	)
}

export default SideBar