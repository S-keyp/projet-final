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

					<section className="section cart">
						<table className="cart-list">
							<thead>
								<tr>
									<th>Name</th>
									<th>Full Prep Time</th>
									<th>Difficulty</th>
									<th>Delete</th>
								</tr>
							</thead>
							<tbody>
							{
								cartState.map(function (elt, index) {
									return (
										<tr className='cart-list-element' key={index}>
											<td>
												{elt.name}
											</td>
											<td className="">
												{ (elt.prepTimeMinutes + elt.cookTimeMinutes).toString() + " Min" }
											</td>
											<td className="">
												{ elt.difficulty }
											</td>
											<td>
												<button onClick={() => removeFromCart(index)}>
													Remove
												</button>
											</td>
										</tr>
									)
								})
							}
							</tbody>
						</table>
					</section>
					<OrderValidationForm />
				</>
			)}
		</>
	)

}