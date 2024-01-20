import DishForm from '../../components/DishForm/DishForm'

function CreateDishPage() {
	let dish = {
		"title":null,
		"summary": null,
		"data": {
			"publisher": null,
			"releaseDate": null,
		},
		"profile": {
			"name": null,
			"bio": null,
		}
	}

	return (
		<div className="create-dish-page">
			<DishForm dish={dish} />
		</div>
	)

}

export default CreateDishPage;
