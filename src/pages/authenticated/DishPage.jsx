import { useParams } from "react-router-dom";
import { useContext } from "react";

import DishAuth from "../../components/DishAuth/DishAuth";
import { DishListContext } from '../../model/utils/context/index';

import NotFound from "../NotFound";

export default function DishPage() {
	const id = Number(useParams().id)
	const { DishListState } = useContext(DishListContext)

	let dish = DishListState.find(dish => dish.id == id)

	if (!dish) return <NotFound />
	else return <DishAuth dish={dish} />
}