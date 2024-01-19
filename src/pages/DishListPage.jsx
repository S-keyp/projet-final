import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Dish from '../components/Dish/Dish'
import { DishListContext } from './../model/utils/context/index';


function DishListPage() {
	const {dishListState, filterDishes, deleteDish, searchDishList} = useContext(DishListContext)

	let searchWord = useRef('')

	function handleInputChange(){
		searchDishList(searchWord)
	}
	
	return (
		<>
			<div className="">
				<h1>Dish list:</h1>
				<div className="">
					<div className="">
						Sort by author:
						<span>
							<button onClick={()=> {
								filterDishes(1)
							}}>ASC</button>

							<button onClick={()=> {
								filterDishes(-1)
							}}>DESC</button>
						</span>
					</div>

					<div className="">
						<label htmlFor="dishtitle">Search for a book title:</label>
						<input id="dishtitle" name="dishtitle" defaultValue={searchWord.current} ref={searchWord} onChange={()=> handleInputChange()} type="text" />
					</div>

					<Link to={'/bookform'}>
						<button className="add-book">Ajouter un livre</button>
					</Link>
				</div>
				<div className="book-list">
					{
						dishListState &&
						dishListState.map(dish => <Dish key={dish.id.toString()} dish={dish} onDeleteDish={deleteDish}/>)}
				</div>
			</div>
		</>
	)
};

export default DishListPage;
