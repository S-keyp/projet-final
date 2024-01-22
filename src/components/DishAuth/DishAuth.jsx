import './DishAuth.css';
import { Link } from "react-router-dom";

function DishAuth({ dish, onDeleteDish }) {

	return (
		<tr className="Dish">
			<td>
				{dish.name}
			</td>
			<td>
				{dish.cuisine}
			</td>
			<td>
				{dish.mealType.map((meal, index) => <span key={index}>{meal}</span>)}
			</td>
			<td className="dish-updater">
				<button>
					<Link to={`/dishform/${dish.id}/update`}>Update</Link>
				</button>
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

export default DishAuth;
