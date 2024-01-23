import { useContext } from "react";
import { CartContext } from '../model/utils/context/CartContext';
import { Link } from "react-router-dom";
import OrderValidationForm from "../components/Forms/OrderValidationForm/OrderValidationForm";

export default function CartPage() {
	const { cartState, removeFromCart } = useContext(CartContext)

	return (
		<>

			{cartState &&
				cartState.length == 0 ? (
				<section className="section">
					<h3 className="section__subtitle">There is nothig to display in your cart</h3>
					<p className="section__paragraph">Start adding some in the <Link to='/menu'>menu page</Link> !</p>
				</section>
			) : (
				<>
					<div className="cart">
						<ul className="cart-list">
							{
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
					<OrderValidationForm />
				</>
			)}
		</>
	)

}