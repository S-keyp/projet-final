import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import DishAuth from '../../components/DishAuth/DishAuth'
import { DishListContext } from '../../model/utils/context/DishListContext';


export default function AdminPage() {
	const { dishListState, filterDishes, deleteDish } = useContext(DishListContext)

	return (
		<>
			<div className="">
				<h1>Admin page:</h1>
				<div className="">
					<div className="">
						Sort by name:
						<span>
							<button onClick={() => {
								filterDishes(1)
							}}>ASC</button>

							<button onClick={() => {
								filterDishes(-1)
							}}>DESC</button>
						</span>
					</div>


					<Link to={'/dishform'}>
						<button className="add-book">Add a dish</button>
					</Link>
				</div>
				<table className="dish-list">
					<thead>
						<tr>
							<th>Name</th>
							<th>Origin</th>
							<th>Meal type</th>
						</tr>
					</thead>
					<tbody>
						{
							dishListState &&
							dishListState.map(dish => <DishAuth key={dish.id} dish={dish} onDeleteDish={deleteDish} />)
						}

					</tbody>
				</table>
			</div>
		</>
	)
};