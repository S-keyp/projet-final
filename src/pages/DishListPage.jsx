import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Dish from '../components/Dish/Dish'
import { DishListContext } from './../model/utils/context/index';


function DishListPage() {
	const {dishListState, filterDishes, deleteDish, searchDishList} = useContext(DishListContext)

	let searchWord = useRef('')

	function handleInputChange(){
		searchDishList(searchWord)
	}
	
	// Celle-ci doit lister sous forme de grille les plats proposés par le restaurant: chaque cellule doit comporter l'image de la recette, un titre, la liste des ingrédients et un bouton pour ajouter au panier (pas besoin pour ce TP de solution de paiement)
	// Le client doit pouvoir consulter le panier à tout moment
	// Sur la page de commande, l'utilisateur doit renseigner ses coordonnées de livraison avant de pouvoir valider son panier
	// Une fois le panier validé, vous afficher une page de confirmation avec un message indiquant que la commande est en préparation
	return (
		<>
			<div className="">
				<h1>Dish list:</h1>
				<div className="dish-list">
					{
						dishListState &&
						dishListState.map(dish => <Dish key={dish.id} dish={dish} onDeleteDish={deleteDish}/>)
					}
				</div>
			</div>
		</>
	)
};

export default DishListPage;
