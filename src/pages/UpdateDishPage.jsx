import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import BookForm from '../components/DishForm/DishForm'
import { DishListContext } from '../model/utils/context/index';

function UpdateDishPage() {	
	const { DishListState } = useContext(DishListContext)
	const id = Number(useParams().id)
	
	const [book, setBook] = useState(DishListState.find(book => book.id === id));

	return (
		<div className="create-book-page">
			<BookForm book={book} />
		</div>
	)

}

export default UpdateDishPage;
