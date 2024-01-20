import { useContext } from "react";
import { CartContext } from '../model/utils/context/CartContext';

export default function CartPage() {
	const { cartState } = useContext(CartContext)

	return (
		<div className="cart">
			<ul className="cart-list">
			{
				!!cartState &&
				cartState.map((elt, index) => <li className='cart-list-element' key={index}>{elt.name}</li>)
			}
			</ul>
		</div>
	)
	
}