import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";
import './Main.css';

import Homepage from '../../pages/Homepage'
import PresentationPage from '../../pages/PresentationPage'
import LocationPage from '../../pages/LocationPage'
import DishPage from '../../pages/DishPage'
import DishListPage from '../../pages/DishListPage'


import BaseAuth from '../../pages/authenticated/BaseAuth';
import DishAuthPage from '../../pages/DishPage'
import DishAuthListPage from '../../pages/authenticated/DishListPage'
import CreateDishPage from '../../pages/authenticated/CreateDishPage'
import UpdateDishPage from '../../pages/authenticated/UpdateDishPage'


import NotFound from '../../pages/NotFound'



import { signOut } from "firebase/auth"
import { auth } from '../../firebase.config'
import { useNavigate } from 'react-router-dom';


function Nav() {
	const navigate = useNavigate()

	const logOut = async () => {
		await signOut(auth)
		navigate("/")
	}
	<nav className="site-navigation">
		<Link className="site-navigation__logo" to="/">Logo</Link>
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
			<button onClick={logOut}>
				Log out
			</button>
		</ul>
	</nav>
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



					<Route path='/admin' element={<BaseAuth />} >
						<Route path='/admin//dish/:id' element={<DishAuthPage />} />
						<Route path='/admin/dishlist' element={<DishAuthListPage />} />
						<Route path="admin/create-dish" element={<CreateDishPage />} />
						<Route path="admin/dish/:id/update" element={<UpdateDishPage />} />
					</Route>

					<Route path="*" element={<NotFound />} />


				</Routes>


				<footer></footer>
			</Router>
		</div>
	)
};