import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import DishForm from '../../components/DishForm/DishForm'
import { DishListContext } from '../../model/utils/context/DishListContext';

function UpdateDishPage() {	
	const { DishListState } = useContext(DishListContext)
	const id = Number(useParams().id)
	
	const [dish, setDish] = useState(DishListState.find(dish => dish.id === id));

	return (
		<div className="update-dish-page">
			<DishForm dish={dish} />
		</div>
	)

}

export default UpdateDishPage;
