import { useEffect, useState, createContext } from 'react';
import { useFetchData } from '../hooks';


export const DishListContext = createContext()

export default function DishListProvider({ children }) {

	const { data } = useFetchData('https://dummyjson.com/recipes');

	const [dishListState, setDishList] = useState([]);


	useEffect(() => {
		setDishList(data.recipes)
	}, [data])


	function filterDishes(ord) {
		setDishList(
			dishListState.toSorted(
				(firstElt, secondElt) => firstElt.name.localeCompare(secondElt.name) * ord
			)
		)

	}

	function deleteDish(dishToDelete) {
		setDishList(dishListState.filter(dish => dishToDelete.id !== dish.id))
	}

	function createOrUpdateDish(newDish) {
		let tempList = dishListState
		if (!newDish.id) {
			newDish.id = Math.max(...dishListState.map(dish => dish.id)) + 1
		} else {
			tempList = dishListState.filter(dish => newDish.id !== dish.id)
		}

		setDishList([...tempList, newDish])
	}

	function getFirstFiveElts() {
		return dishListState.slice(0, 5)
	}

	return (
		<DishListContext.Provider value={{ dishListState, filterDishes, deleteDish, createOrUpdateDish, getFirstFiveElts }}>
			{children}
		</DishListContext.Provider>
	)
}