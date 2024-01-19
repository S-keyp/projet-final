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
import CreateDishPage from '../../pages/CreateDishPage'
import UpdateDishPage from '../../pages/UpdateDishPage'
import NotFound from '../../pages/NotFound'



const Nav = () => (
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
		</ul>
	</nav>
);


function Main() {
	return (
		<div className="main">
			<Router>
				<Nav />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/presentation" element={<PresentationPage />} />
					<Route path="/menu" element={<DishListPage />} />
					<Route path="/location" element={<LocationPage />} />
					{/* <Route path="/map" element={<BookListPage />} /> */}



					<Route path="*" element={<NotFound />} />


					{/* privé après connexion  */}
					<Route path="/dish/:id" element={<DishPage />} />
					<Route path="/create-dish" element={<CreateDishPage />} />
					<Route path="/dish/:id/update" element={<UpdateDishPage />} />
				</Routes>


				<footer></footer>
			</Router>
		</div>
	)
};

export default Main;
