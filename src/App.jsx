import DishListProvider from './model/utils/context/DishListContext'
import CartContextProvider from './model/utils/context/CartContext'
import UserContextProvider from './model/utils/context/UserContext'
import Main from './components/Main/Main'
import './App.css'

function App() {

	return (
		<>
			<UserContextProvider>

				<DishListProvider>

					<CartContextProvider>

						<Main />

					</CartContextProvider>

				</DishListProvider>

			</UserContextProvider>
		</>
	)
}

export default App