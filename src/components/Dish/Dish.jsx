import './Dish.css';
import { Link } from "react-router-dom";

function Dish({ dish, onDeleteDish }) {

	return (
		<div className="Dish">
			<img src={dish.image} />

			<h4>Name:</h4>
			<Link to={`/dishpage/${dish.id}`}>{dish.name}</Link>

			<h4>Ingredients:</h4>
			<ul>
				{dish.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
			</ul>
			{/* todo add to cart */}
			<button>Add +</button>
		</div>
	)
};

export default Dish;
