import { useEffect, useState, createContext } from 'react';
import { useFetchData } from '../hooks';


export const DishListContext = createContext()

export default function DishListProvider({ children }) {
	
	const { data } = useFetchData('https://dummyjson.com/recipes');
	
	const [dishListState, setDishList] = useState([]);
	const [dishListCopyState, setDishListCopyState] = useState([])
	const [cart, setCart] = useState([]);


	useEffect(() => {
		setListStateAndListCopyState(data.recipes, data.recipes)
	}, [data])


	function setListStateAndListCopyState(val1, val2) {
		setDishList(val1)
		setDishListCopyState(val2)
	}

	// CART
	function addToCart(dish){
		setCart([...cart, dish]);
	}

	function removeFromCart(dish){
		setCart(cart.filter(cartDish => dish.id === cartDish.id));
	}

	//DISHLIST
	function filterDishes(ord) {
		setListStateAndListCopyState(
			dishListState.toSorted(
				(firstElt, secondElt) => firstElt.profile.name.localeCompare(secondElt.profile.name) * ord
			),
			dishListCopyState.toSorted(
				(firstElt, secondElt) => firstElt.profile.name.localeCompare(secondElt.profile.name) * ord
			)
		)
	}

	function deleteDish(dishToDelete) {
		setListStateAndListCopyState(
			dishListState.filter(dish => dishToDelete.id !== dish.id), 
			dishListCopyState.filter(dish => dishToDelete.id !== dish.id)
		)
	}

	function createOrUpdateDish(newDish) {
		let tempList = dishListState
		if (!newDish.id) {
			newDish.id = Math.max(...dishListState.map(dish => dish.id)) + 1
			newDish.dishImg = `https://picsum.photos/id/${newDish.id}/200/200`
			newDish.profile.photo = `https://picsum.photos/id/${newDish.id * 10}/200/200`
		} else {
			tempList = dishListState.filter(dish => newDish.id !== dish.id)
		}
		
		setDishList([...tempList, newDish])
	}

	return (
		<DishListContext.Provider value={{ 
			dishListState, filterDishes, deleteDish, createOrUpdateDish,
			addToCart, removeFromCart 
			}}>
			{children}
		</DishListContext.Provider>
	)
}