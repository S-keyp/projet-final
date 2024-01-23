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

			<h5>Ingredients:</h5>
			<ul className='dish-card__list'>
				{dish.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
			</ul>

			<button onClick={() => addToCart(dish)} className='dish-card__action'>Add +</button>
		</div>
	)
};