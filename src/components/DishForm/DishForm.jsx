import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";

import { DishListContext } from '../../model/utils/context/DishListContext';


function DishForm({ dish }) {

	const navigate = useNavigate()
	
	const { createOrUpdate } = useContext(DishListContext)
	
	let title = useRef(book.title)
	let summary = useRef(book.summary)
	let publisher = useRef(book.data.publisher)
	let releaseDate = useRef(book.data.releaseDate)
	let name = useRef(book.profile.name)
	let bio = useRef(book.profile.bio)
	

	function handleSubmit(event){

		event.preventDefault()
		
		book.title = title.current.value
		book.summary = summary.current.value
		book.data.publisher = publisher.current.value
		book.data.releaseDate = releaseDate.current.value
		book.profile.name = name.current.value
		book.profile.bio = bio.current.value

    createOrUpdate(book)
	}

	return (
		<form className="create-book">
			<div>
				<label htmlFor="title">Title:</label>
				<input defaultValue={title.current} ref={title} id="title" name="title" type="text" />
			</div>

			<div>
				<label htmlFor="summary">Summary:</label>
				<input defaultValue={summary.current} ref={summary} id="summary" name="summary" type="text" />
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
				navigate('/booklistpage')
			}} type="submit">Envoyer</button>

		</form>
	)

}

export default DishForm;
