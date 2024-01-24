import { useContext } from "react";
import { DishListContext } from '../../model/utils/context/DishListContext';

import { Link } from "react-router-dom";
import DishAuth from '../../components/DishAuth/DishAuth'


export default function AdminPage() {
	const { dishListState, filterDishes, deleteDish } = useContext(DishListContext)

	return (
		<>
			<div className="section">
				<h1 className="section__subtitle">Stock gestion:</h1>
				<div className="gestion-controls">
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


					<Link to={'/admin/create-dish'}>
						<button className="add-dish">Add a dish</button>
					</Link>
				</div>
				
				<table className="">
					<thead>
						<tr>
							<th>Name</th>
							<th>Origin</th>
							<th>Meal type</th>
							<th>Remove</th>
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