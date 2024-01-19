import BookForm from '../components/DishForm/DishForm'

function CreateDishPage() {
	let book = {
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
		<div className="create-book-page">
			<BookForm book={book} />
		</div>
	)

}

export default CreateDishPage;
