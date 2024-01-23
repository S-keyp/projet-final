import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";

import { DishListContext } from '../../../model/utils/context/DishListContext';


export default function DishForm({ dish }) {

	const navigate = useNavigate()

	const { createOrUpdateDish } = useContext(DishListContext)

	console.log(dish)

	let name = useRef(dish.name)
	let ingredients = useRef(dish.ingredients)
	let prepTimeMinutes = useRef(dish.prepTimeMinutes)
	let cookTimeMinutes = useRef(dish.cookTimeMinutes)
	let servings = useRef(dish.servings)
	let difficulty = useRef(dish.difficulty)
	let cuisine = useRef(dish.cuisine)
	let mealType = useRef(dish.mealType)


	function handleSubmit(event) {

		event.preventDefault()

		dish.name = name.current.value
		dish.ingredients = ingredients.current.value.split(',')
		dish.prepTimeMinutes = prepTimeMinutes.current.value
		dish.cookTimeMinutes = cookTimeMinutes.current.value
		dish.servings = servings.current.value
		dish.difficulty = difficulty.current.value
		dish.cuisine = cuisine.current.value
		dish.mealType = mealType.current.value.split(',')
		
		console.log(dish.ingredients)

		createOrUpdateDish(dish)
	}

	return (
		<form className="create-dish">
			<div>
				<label htmlFor="name">Name:</label>
				<input defaultValue={name.current} ref={name} id="name" name="name" type="text" />
			</div>

			<div>
				<label htmlFor="ingredients">Ingredients:</label>
				<input defaultValue={ingredients.current} ref={ingredients} id="ingredients" name="ingredients" type="text" />
			</div>

			<div>
				<label htmlFor="prepTimeMinutes">Preparation time (min):</label>
				<input defaultValue={prepTimeMinutes.current} ref={prepTimeMinutes} id="prepTimeMinutes" name="prepTimeMinutes" type="text" />
			</div>

			<div>
				<label htmlFor="cookTimeMinutes">Cooking time (min):</label>
				<input defaultValue={cookTimeMinutes.current} ref={cookTimeMinutes} id="cookTimeMinutes" name="cookTimeMinutes" type="text" />
			</div>

			<div>
				<label htmlFor="servings">Serving:</label>
				<input defaultValue={servings.current} ref={servings} id="servings" name="servings" type="text" />
			</div>

			<div>
				<label htmlFor="difficulty">Difficulty:</label>
				<input defaultValue={difficulty.current} ref={difficulty} id="difficulty" name="difficulty" type="text" />
			</div>
			<div>
				<label htmlFor="cuisine">Cuisine:</label>
				<input defaultValue={cuisine.current} ref={cuisine} id="cuisine" name="cuisine" type="text" />
			</div>
			<div>
				<label htmlFor="mealType">Meal type:</label>
				<input defaultValue={mealType.current} ref={mealType} id="mealType" name="mealType" type="text" />
			</div>

			<button onClick={() => {
				handleSubmit(event)
				navigate('/admin/home')
			}} type="submit">Envoyer</button>

		</form>
	)

}