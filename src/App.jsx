import { useState } from 'react'
import DishListProvider from './model/utils/context'
import UserContextProvider from './model/utils/context'
import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation'
import './App.css'

function App() {

	return (
		<>
			<UserContextProvider>
				<DishListProvider>

					<HeaderNavigation />

				</DishListProvider>
			</UserContextProvider>
		</>
	)
}

export default App