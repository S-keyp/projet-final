import './Dish.css';
import { Link } from "react-router-dom";

function Dish({ dish }) {

	return (
		<div className="dish-card">
			<img className="dish-card__thumbnail" src={dish.image} />

			<h5 className='dish-card__title'>
				Name: <br />
				<Link to={`/dishpage/${dish.id}`}>{dish.name}</Link>
			</h5>

			<h5>Ingredients:</h5>
			<ul className='dish-card__list'>
				{dish.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
			</ul>

			{/* todo add to cart */}
			<button className='dish-card__action'>Add +</button>
		</div>
	)
};

export default Dish;
