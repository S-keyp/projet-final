import './DishAuth.css';
import { Link } from "react-router-dom";


export default function DishAuth({ dish, onDeleteDish }) {
	return (
		<tr className="Dish">
			<td>
				<Link to={`/admin/dish/${dish.id}/update`}>{dish.name}</Link>
			</td>
			<td>
				{dish.cuisine}
			</td>
			<td>
				{dish.mealType.map((meal, index) => <span className='tag-light' key={index}>{meal} </span>)}
			</td>
			<td>
				{
					!!onDeleteDish && (
						<button onClick={() => {
							onDeleteDish(dish)
						}}>Delete</button>
					)
				}
			</td>
		</tr>
	)
};