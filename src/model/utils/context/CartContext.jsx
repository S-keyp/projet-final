import { useEffect, useState, createContext } from 'react';

export const CartContext = createContext()

export default function CartContextProvider({ children }) {

	const [cartState, setCart] = useState([]);

	useEffect(() => {
		setCart([])
	}, [])

	function addToCart(dish) {
		setCart([...cartState, dish]);
		console.log('cartState', cartState);
	}

	function removeFromCart(dish) {
		setCart(cartState.filter(cartDish => dish.id === cartDish.id));
	}


	return (
		<CartContext.Provider value={{ cartState, removeFromCart, addToCart }}>
			{children}
		</CartContext.Provider>
	)
}