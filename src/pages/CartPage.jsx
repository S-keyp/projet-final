import { useContext } from "react";
import { CartContext } from '../model/utils/context/CartContext';

export default function CartPage() {
	const { cartState, removeFromCart } = useContext(CartContext)

	return (
		<div className="cart">
			<ul className="cart-list">
				{
					cartState &&
					cartState.map(function (elt, index) {
						return (
							<li className='cart-list-element' key={index}>
								{elt.name}
								<button onClick={() => removeFromCart(index)}>
									Remove
								</button>
							</li>
						)
					})
				}
			</ul>
		</div>
	)

}