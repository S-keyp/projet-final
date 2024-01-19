import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import DishAuth from '../../components/DishAuth/DishAuth'
import { DishListContext } from '../../model/utils/context/index';


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
						Sort by name:
						<span>
							<button onClick={()=> {
								filterDishes(1)
							}}>ASC</button>

							<button onClick={()=> {
								filterDishes(-1)
							}}>DESC</button>
						</span>
					</div>


					<Link to={'/dishform'}>
						<button className="add-book">Add a dish</button>
					</Link>
				</div>
				<div className="dish-list">
					{
						dishListState &&
						dishListState.map(dish => <DishAuth key={dish.id} dish={dish} onDeleteDish={deleteDish}/>)
					}
				</div>
			</div>
		</>
	)
};

export default DishListPage;
