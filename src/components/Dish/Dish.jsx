import './Dish.css';
import { useContext } from 'react';
import { CartContext } from '../../model/utils/context/CartContext';

import { Link } from "react-router-dom";

export default function Dish({ dish }) {
	const { addToCart } = useContext(CartContext)

	return (
		<div className="dish-card">
			<img className="dish-card__thumbnail" src={dish.image} />

			<h5 className='dish-card__title'>
				Name: <br />
				<Link to={`/dish/${dish.id}`}>{dish.name}</Link>
			</h5>

			<div className="dish-card__body">
				<div>
					<h5>Ingredients:</h5>
					<ul className='dish-card__list'>
						{dish.ingredients.map((ingredient, index) => <li key={index}>{ingredient.replace(',', ' ~')}</li>)}
					</ul>
				</div>
				<div className="dish-card__instructions">
					<h5>Instructions:</h5>
					<ul className='dish-card__list'>
						{dish.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
					</ul>
				</div>
				<div className="dish-card__instructions ">
					<h5>Preparation Time:</h5>
					<p>{dish.prepTimeMinutes} Min</p>
					<h5>Cook Time:</h5>
					<p>{dish.cookTimeMinutes} Min</p>
					<h5>Serving:</h5>
					<p>{dish.servings} Person</p>
					<h5>Tags:</h5>
					<p>
						{dish.tags.map((tag, index) => <span className='tag' key={index}>{tag}</span>)}
					</p>
				</div>
			</div>

			<button onClick={() => addToCart(dish)} className='dish-card__action'>Add +</button>
		</div>
	)
};