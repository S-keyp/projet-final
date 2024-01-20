import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";
import './Main.css';

import ConnexionBox from '../ConnexionBox/ConnexionBox';
import CartPage from '../../pages/CartPage'
import DishPage from '../../pages/DishPage'
import DishListPage from '../../pages/DishListPage'
import Homepage from '../../pages/Homepage'
import LocationPage from '../../pages/LocationPage'
import NotFound from '../../pages/NotFound'
import PresentationPage from '../../pages/PresentationPage'


import BaseAuth from '../../pages/authenticated/BaseAuth';
import CreateDishPage from '../../pages/authenticated/CreateDishPage'
import DishAuthPage from '../../pages/DishPage'
import DishAuthListPage from '../../pages/authenticated/DishListPage'
import UpdateDishPage from '../../pages/authenticated/UpdateDishPage'






function Nav() {
	return (
		<nav className="site-navigation">
			<Link className="site-navigation__logo" to="/">Gourmet Logo</Link>
			<ul>
				<li>
					<Link to="/presentation">Presentation</Link>
				</li>
				<li>
					<Link to="/menu">Menu</Link>
				</li>
				<li>
					<Link to="/location">Location</Link>
				</li>
				<li>
					<Link to="/cart">Cart 🛒</Link>
				</li>
			</ul>
		</nav>
	)
};


export default function Main() {

	return (
		<div className="main">

			<Router>
				<Nav />
				<Routes>

					<Route path="/" element={<Homepage />} />
					<Route path="/presentation" element={<PresentationPage />} />
					<Route path="/menu" element={<DishListPage />} />
					<Route path="/location" element={<LocationPage />} />
					<Route path="/dish/:id" element={<DishPage />} />
					<Route path='/cart' element={<CartPage />} />



					<Route path='/admin' element={<BaseAuth />} >
						<Route path='/admin//dish/:id' element={<DishAuthPage />} />
						<Route path='/admin/dishlist' element={<DishAuthListPage />} />
						<Route path="admin/create-dish" element={<CreateDishPage />} />
						<Route path="admin/dish/:id/update" element={<UpdateDishPage />} />
					</Route>

					<Route path="*" element={<NotFound />} />


				</Routes>


				<footer>
					<ConnexionBox />
				</footer>
			</Router>
		</div>
	)
};