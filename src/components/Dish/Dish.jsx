import './Dish.css';
import { Link } from "react-router-dom";

function Dish({ dish, onDeleteDish }) {

	return (
		<div className="Dish">
			<img src={dish.dishImg} />

			<h4>title:</h4>
			<Link to={`/dishpage/${dish.id}`}>{dish.title}</Link>

			<h4>Summary:</h4>
			{dish.summary}

			{/* <h4>Author:</h4>
			<Profile profile={dish.profile} /> */}

			{/* <h4>DishData:</h4>
			<DishData data={dish.data} /> */}

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
