import { useParams } from "react-router-dom";
import { useContext } from "react";

import Dish from "../components/Dish/Dish";
import { DishListContext } from '../model/utils/context/DishListContext';

import NotFound from "./NotFound";

function DishPage() {
	const id = Number(useParams().id)
	const { DishListState } = useContext(DishListContext)

	let dish = DishListState.find(dish => dish.id == id)

	if (!dish) return <NotFound />
	else return <Dish dish={dish} />
}

export default DishPage;
