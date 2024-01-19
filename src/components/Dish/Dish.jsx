import './Dish.css';
import { Link } from "react-router-dom";

function Dish({ dish, onDeleteDish }) {

	return (
		<div className="Dish">
			{/* <img src={dish.dishImg} /> */}

			<h4>Name:</h4>
			<Link to={`/dishpage/${dish.id}`}>{dish.name}</Link>

			<h4>Ingredients:</h4>
			<ul>
				{dish.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
			</ul>

			
			<button>Add +</button>

			{/* To be displayed only if connected */}
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

export default Dish;
