import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import DishForm from '../../components/Forms/DishForm/DishForm'
import { DishListContext } from '../../model/utils/context/DishListContext';

export default function UpdateDishPage() {
	const { dishListState } = useContext(DishListContext)
	const id = Number(useParams().id)

	const [dish, setDish] = useState(dishListState.find(dish => dish.id === id));

	return (
		<section className="section">
			<h2 className="section__subtitle">Update a dish</h2>
			<DishForm dish={dish} />
		</section>
	)

}