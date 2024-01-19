import React from 'react';
import './HeaderNavigation.css';



const HeaderNav = () => (
	<ul className="navigation">
		<li>
			<Link to="/">Homepage</Link>
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
					<Route path="/map" element={<BookListPage />} />

					<Route path="*" element={<NotFound />} />


					{/* privé après connexion  */}
					<Route path="/dish/:id" element={<BookPage />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/create-dish" element={<CreateBookPage />} />
					<Route path="/dish/:id/update" element={<UpadateBookPage />} />
				</Routes>
			</Router>
		</div>
	)
};

export default HeaderNavigation;
