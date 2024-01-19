import BookForm from './../components/BookForm/BookForm'

function CreateBookPage() {
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

export default CreateBookPage;
