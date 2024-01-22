import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";

import { DishListContext } from '../../model/utils/context/DishListContext';


function DishForm({ dish }) {

	const navigate = useNavigate()

	const { createOrUpdateDish } = useContext(DishListContext)

	let name = useRef(dish.name)
	let ingredients = useRef(dish.ingredients)
	let publisher = useRef(dish.data.publisher)
	let releaseDate = useRef(dish.data.releaseDate)
	// let name = useRef(dish.profile.name)
	let bio = useRef(dish.profile.bio)


	function handleSubmit(event) {

		event.preventDefault()

		dish.name = name.current.value
		dish.ingredients = ingredients.current.value
		dish.data.publisher = publisher.current.value
		dish.data.releaseDate = releaseDate.current.value
		dish.profile.name = name.current.value
		dish.profile.bio = bio.current.value

		createOrUpdateDish(dish)
	}

	return (
		<form className="create-dish">
			<div>
				<label htmlFor="name">Title:</label>
				<input defaultValue={name.current} ref={name} id="name" name="name" type="text" />
			</div>

			<div>
				<label htmlFor="ingredients">Summary:</label>
				<input defaultValue={ingredients.current} ref={ingredients} id="ingredients" name="ingredients" type="text" />
			</div>

			<div>
				<label htmlFor="publisher">Publisher:</label>
				<input defaultValue={publisher.current} ref={publisher} id="publisher" name="publisher" type="text" />
			</div>

			<div>
				<label htmlFor="releaseDate">Release date:</label>
				<input defaultValue={releaseDate.current} ref={releaseDate} id="releaseDate" name="releaseDate" type="text" />
			</div>

			<div>
				<label htmlFor="name">Name:</label>
				<input defaultValue={name.current} ref={name} id="name" name="name" type="text" />
			</div>

			<div>
				<label htmlFor="bio">Bio:</label>
				<input defaultValue={bio.current} ref={bio} id="bio" name="bio" type="text" />
			</div>

			<button onClick={() => {
				handleSubmit(event)
				navigate('/admin/administration')
			}} type="submit">Envoyer</button>

		</form>
	)

}

export default DishForm;
