import DishListProvider from './model/utils/context'
import UserContextProvider from './model/utils/context'
import Main from './components/HeaderNavigation/Main'
import './App.css'

function App() {

	return (
		<>
			<UserContextProvider>

				<DishListProvider>

					<Main />

				</DishListProvider>

			</UserContextProvider>
		</>
	)
}

export default App