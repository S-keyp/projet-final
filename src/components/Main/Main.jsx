import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";
import './Main.css';

import ConnexionForm from '../Forms/ConnexionForm/ConnexionForm';
import CartPage from '../../pages/CartPage'
import DishPage from '../../pages/DishPage'
import DishListPage from '../../pages/DishListPage'
import Homepage from '../../pages/Homepage'
import LocationPage from '../../pages/LocationPage'
import NotFound from '../../pages/NotFound'
import OrderValidated from "../../pages/OrderValidated";
import PresentationPage from '../../pages/PresentationPage'


import AdminPage from '../../pages/authenticated/AdminPage'
import BaseAuth from '../../pages/authenticated/BaseAuth';
import CreateDishPage from '../../pages/authenticated/CreateDishPage'
import DishAuthPage from '../../pages/DishPage'
import Sitemap from "../../pages/Sitemap";
import UpdateDishPage from '../../pages/authenticated/UpdateDishPage'


import { UserContext } from "../../model/utils/context/UserContext";
import { useContext } from "react";



function Nav() {

	const { user } = useContext(UserContext)

	return (
		<nav className="site-navigation">
			<Link className="site-navigation__logo" to="/">
				<svg viewBox="0 0 122.88 121.87" >
					<g>
						<path d="M97.34,0.74c0.86-0.93,2.3-0.99,3.23-0.13c0.93,0.86,0.99,2.3,0.13,3.23L81.98,24.1l-0.03,0.04 c-2.29,2.77-3.86,5.33-4.56,7.67c-0.62,2.07-0.53,3.95,0.39,5.59c0.49,0.88,0.33,1.96-0.32,2.67l0,0l-8.89,9.62 c-0.87-0.95-1.56-1.72-2.02-2.22c-0.21-0.28-0.45-0.55-0.7-0.81l-0.02,0.02c-0.12-0.13-0.25-0.25-0.38-0.37l7.6-8.23 c-0.89-2.38-0.88-4.91-0.06-7.6c0.88-2.92,2.75-6.03,5.44-9.27c0.06-0.08,0.11-0.16,0.18-0.23L97.32,0.72L97.34,0.74L97.34,0.74z M57.13,55.01c-0.84-0.94-0.76-2.39,0.18-3.23c0.94-0.84,2.39-0.76,3.23,0.18c9.41,10.54,38.5,41.73,46.56,53.39 c10.63,15.05-5.83,19.79-11.29,14.31c-13.64-13.19-42.6-46.82-55.33-61.08c-4.58,1.94-9.03,2.24-13.5,0.96 c-4.81-1.37-9.52-4.58-14.3-9.51l-0.06-0.06c-3.64-3.84-6.49-7.63-8.55-11.38c-2.11-3.86-3.4-7.68-3.86-11.47 c-0.49-4.08-0.11-7.88,0.99-11.25c1.29-3.96,3.58-7.31,6.58-9.8c3.02-2.5,6.73-4.12,10.87-4.62c3.44-0.41,7.19-0.06,11.07,1.21 c5.37,1.75,11.63,6.1,16.82,11.68c3.83,4.11,7.11,8.92,9.06,13.87c2.03,5.16,2.65,10.5,1.02,15.5c-0.96,2.96-2.7,5.74-5.4,8.25 c-0.93,0.86-2.37,0.8-3.23-0.12c-0.86-0.93-0.8-2.37,0.12-3.23c2.09-1.95,3.43-4.08,4.16-6.33c1.26-3.87,0.73-8.16-0.93-12.38 c-1.74-4.42-4.69-8.74-8.15-12.45c-4.68-5.02-10.23-8.91-14.91-10.44c-3.21-1.04-6.28-1.34-9.09-1c-3.26,0.4-6.18,1.65-8.51,3.6 c-2.34,1.95-4.13,4.58-5.16,7.71c-0.89,2.73-1.2,5.87-0.79,9.26c0.39,3.2,1.5,6.47,3.32,9.81c1.91,3.43,4.53,6.9,7.9,10.45 l0.02,0.03c4.22,4.35,8.27,7.15,12.28,8.29c3.79,1.08,7.65,0.66,11.68-1.35c0.92-0.53,2.11-0.35,2.84,0.47 c12.42,13.91,42.63,48.92,56.01,61.89c5.81,2.37,9.03-0.55,6.25-5.7C100.7,102.43,63.5,62.17,57.13,55.01L57.13,55.01L57.13,55.01z M45.07,75.12l-29.16,31.55c-0.06,0.06-0.11,0.12-0.18,0.18c-4.26,4.6,3.28,11.3,7.96,6.82l28.32-30.65l3.04,3.45l-28.1,30.41l0,0 c-0.06,0.07-0.12,0.13-0.2,0.2c-1.68,1.41-3.37,2.33-5.08,2.71c-1.76,0.4-3.49,0.22-5.15-0.56c-0.28-0.11-0.54-0.25-0.77-0.46 l-4.03-3.73l0,0c-0.06-0.06-0.12-0.11-0.18-0.18c-1.56-1.8-2.3-3.72-2.1-5.75c0.19-1.92,1.21-3.79,3.14-5.59l29.44-31.86 L45.07,75.12L45.07,75.12z M75.63,57.46l1.73-1.87c0.86-0.93,2.31-0.99,3.23-0.13s0.99,2.3,0.13,3.23l-2,2.16L75.63,57.46 L75.63,57.46z M104.45,7.43c0.86-0.93,2.3-0.99,3.23-0.13c0.93,0.86,0.99,2.3,0.13,3.23L91.4,28.3c-0.86,0.93-2.3,0.99-3.23,0.13 c-0.93-0.86-0.99-2.3-0.13-3.23L104.45,7.43L104.45,7.43L104.45,7.43z M111.55,14c0.86-0.93,2.3-0.99,3.23-0.13 c0.93,0.86,0.99,2.3,0.13,3.23L98.51,34.86c-0.86,0.93-2.3,0.99-3.23,0.13c-0.93-0.86-0.99-2.3-0.13-3.23L111.55,14L111.55,14 L111.55,14z M118.91,20.83c0.86-0.93,2.3-0.99,3.23-0.13c0.93,0.86,0.99,2.31,0.13,3.23L103.55,44.2c-0.07,0.07-0.14,0.13-0.21,0.2 c-4.26,4.1-8.33,6.47-12.22,7.14c-4.22,0.73-8.09-0.47-11.64-3.57c-0.95-0.83-1.04-2.28-0.22-3.22c0.83-0.95,2.28-1.04,3.22-0.22 c2.45,2.14,5.07,2.98,7.84,2.49c2.98-0.51,6.26-2.48,9.84-5.93l0.02-0.02l18.71-20.25L118.91,20.83L118.91,20.83z" />
					</g>
				</svg> G F T</Link>
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
				{user && (
					<li className="site-nav-admin">
						Administration
						<ul>
							<li><Link to="/admin/home">Stock</Link></li>
							<li><Link to="/admin/create-dish">Add&nbsp;a&nbsp;dish</Link></li>
						</ul>
					</li>
				)}
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
					<Route path='/sitemap' element={<Sitemap />} />
					<Route path='/order-validation' element={<OrderValidated />} />


					<Route path='/admin' element={<BaseAuth />} >
						<Route path='/admin/home' element={<AdminPage />} />
						<Route path='/admin//dish/:id' element={<DishAuthPage />} />
						<Route path="/admin/create-dish" element={<CreateDishPage />} />
						<Route path="/admin/dish/:id/update" element={<UpdateDishPage />} />
					</Route>


					<Route path="*" element={<NotFound />} />

				</Routes>


				<footer className="footer">
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
					</ul>
					<ul>
						<li>
							<Link to="/sitemap">Sitemap</Link>
						</li>
						<li>
							<ConnexionForm />
						</li>
					</ul>
				</footer>
			</Router>
		</div>
	)
};