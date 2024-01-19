import { useState } from 'react'
import DishListProvider from './model/utils/context'
import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation'
import './App.css'

function App() {

	return (
		<>
			<DishListProvider>

				<HeaderNavigation />

			</DishListProvider>
		</>
	)
}

export default App
