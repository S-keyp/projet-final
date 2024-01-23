import DishForm from '../../components/Forms/DishForm/DishForm'

export default function CreateDishPage() {
	let dish = {
		"name":null,
		"instructions": null,
		"prepTimeMinutes": null,
		"cookTimeMinutes": null,
		"servings": null,
		"difficulty": null,
		"cuisine": null,
		"mealType": null,
	}


	console.log(dish)

	return (
		<div className="create-dish-page">
			<DishForm dish={dish} />
		</div>
	)

}