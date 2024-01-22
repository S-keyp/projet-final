import { useContext } from "react";
import { CartContext } from '../model/utils/context/CartContext';
import { Link } from "react-router-dom";

export default function CartPage() {
	const { cartState, removeFromCart } = useContext(CartContext)

	return (
		<div className="cart">
			{cartState &&
				cartState.length == 0 && (
					<p>There is nothig to display in your cart, start adding some in the <Link to='/menu'>menu page</Link> !</p>
				)
			}
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