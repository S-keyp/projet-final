import { useEffect, useState, createContext } from 'react';

export const CartContext = createContext()

export default function CartContextProvider({ children }) {

	const [cartState, setCart] = useState([]);

	useEffect(() => {
		setCart([])
	}, [])

	function addToCart(dish) {
		setCart([...cartState, dish]);
	}

	function removeFromCart(index) {
		setCart(cartState.toSpliced(index, 1));
	}


	return (
		<CartContext.Provider value={{ cartState, removeFromCart, addToCart }}>
			{children}
		</CartContext.Provider>
	)
}