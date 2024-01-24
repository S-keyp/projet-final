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


	return (
		<section className="section">
			<h2 className='section__subtitle'>Create a dish</h2>
			<DishForm dish={dish} />
		</section>
	)
}