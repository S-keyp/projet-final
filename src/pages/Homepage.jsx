import { Link } from "react-router-dom";
import Slider from "../components/Slider/Slider";


export default function Homepage() {
	return (
		<div className="homepage">
			<header className="header">
				<h1 className="header__title">Welcome to Gourmet Fusion Bistro !</h1>
			</header>

			<Slider />

			<button>
				<Link to='/cart'>To cart</Link>
			</button>
		</div>
	)
};