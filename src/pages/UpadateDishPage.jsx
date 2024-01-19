import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import BookForm from '../components/BookForm/BookForm'
import { BookListContext } from '../models/utils/context/index';

function UpadateBookPage() {	
	const { bookListState } = useContext(BookListContext)
	const id = Number(useParams().id)
	
	const [book, setBook] = useState(bookListState.find(book => book.id === id));

	return (
		<div className="create-book-page">
			<BookForm book={book} />
		</div>
	)

}

export default UpadateBookPage;
