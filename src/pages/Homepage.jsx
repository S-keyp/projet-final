import { useContext, useState, useEffect } from "react";
import { DishListContext } from "../model/utils/context/DishListContext";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.css";


export default function Homepage() {
	const { dishListState, getFirstFiveElts } = useContext(DishListContext)
	const [sliderElts, setSliderElts] = useState([])

	useEffect(() => {
		if (dishListState) {
			setSliderElts(getFirstFiveElts())
		}
	}, [dishListState])

	return (
		<div className="homepage">

			<header className="header">
				<h1 className="header__title">Welcome to Gourmet Fusion Bistro !</h1>
			</header>

			{sliderElts &&
				(<Carousel
					width="65%"
					autoPlay={true}
					interval={3000}
					infiniteLoop={true}
					stopOnHover={true}
					showArrows={false}
					showStatus={false}
				>
					{
						sliderElts &&
						sliderElts.map((element, index) => (
							<div key={index}>
								<img src={element.image} alt={element.name} />
								<p className="">{element.name}</p>
							</div>
						))
					}
				</Carousel>
				)}

			<button>
				<Link to='/cart'>To cart</Link>
			</button>

		</div>
	)
};