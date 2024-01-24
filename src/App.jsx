import DishListProvider from './model/utils/context/DishListContext'
import CartContextProvider from './model/utils/context/CartContext'
import UserContextProvider from './model/utils/context/UserContext'
import MainBody from './components/MainBody/MainBody'
import './App.css'

function App() {

	return (
		<>
			<UserContextProvider>

				<DishListProvider>

					<CartContextProvider>

						<MainBody />

					</CartContextProvider>

				</DishListProvider>

			</UserContextProvider>
		</>
	)
}

export default App