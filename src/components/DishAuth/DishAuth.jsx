import './DishAuth.css';
import { Link } from "react-router-dom";

function DishAuth({ dish, onDeleteDish }) {

	return (
		<div className="Dish">
			{/* <img src={dish.dishImg} /> */}

			<h4>Name:</h4>
			{dish.name}

			<h4>Origin:</h4>
			{dish.cuisine}

			<h4>Meal types:</h4>
			<ul>
				{dish.mealType.map((meal, index) => <li key={index}>{meal}</li>)}
			</ul>

			
			<div className="dish-updater">
				<button>
					<Link to={`/dishform/${dish.id}/update`}>Update</Link>
				</button>

				{
					!!onDeleteDish && (
						<button onClick={() => {
							onDeleteDish(dish)
						}}>Delete</button>
					)
				}
			</div>
		</div>
	)
};

export default DishAuth;
