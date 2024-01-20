import DishListProvider from './model/utils/context/DishListContext'
import UserContextProvider from './model/utils/context/UserContext'
import Main from './components/Main/Main'
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