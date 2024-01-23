import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Dish from "../components/Dish/Dish";
import { DishListContext } from '../model/utils/context/DishListContext';

import NotFound from "./NotFound";

function DishPage() {
	const id = Number(useParams().id)
	const { dishListState } = useContext(DishListContext)
	const [dish, setDish] = useState()

	useEffect(() => {
		if(dishListState) setDish(dishListState.find(dish => dish.id == id))
	}, [dishListState])

	return (
		<>
			{
				dishListState &&
					dish ? (
					<Dish dish={dish} />
				) : (
					<NotFound />
				)
			}
		</>
	)
}

export default DishPage;
