import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";
import './HeaderNavigation.css';

import Homepage from './../../pages/Homepage'
import PresentationPage from './../../pages/PresentationPage'
import DishPage from './../../pages/DishPage'
import DishListPage from './../../pages/DishListPage'
import CreateDishPage from './../../pages/CreateDishPage'
import UpdateDishPage from './../../pages/UpdateDishPage'
import NotFound from './../../pages/NotFound'



const HeaderNav = () => (
	<ul className="navigation">
		<li>
			<Link to="/">Homepage</Link>
		</li>
		<li>
			<Link to="/presentation">Presentation</Link>
		</li>
		<li>
			<Link to="/menu">Menu</Link>
		</li>
		<li>
			<Link to="/localisation">Localisation</Link>
		</li>
	</ul>
);


function HeaderNavigation() {
	return (
		<div className="HeaderNavigation">
			<Router>
				<HeaderNav />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/presentation" element={<PresentationPage />} />
					<Route path="/menu" element={<DishListPage />} />
					{/* <Route path="/map" element={<BookListPage />} /> */}

					

					<Route path="*" element={<NotFound />} />


					{/* privé après connexion  */}
					<Route path="/dish/:id" element={<DishPage />} />
					<Route path="/create-dish" element={<CreateDishPage />} />
					<Route path="/dish/:id/update" element={<UpdateDishPage />} />
				</Routes>
			</Router>
		</div>
	)
};

export default HeaderNavigation;
