import { Carousel } from "react-responsive-carousel";
import { DishListContext } from "../../model/utils/context/DishListContext";
import { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.css";


export default function Slider() {
	const { dishListState } = useContext(DishListContext)
	const [ sliderElts, setSliderElts ] = useState([])

	useEffect(() => {
		setSliderElts(dishListState.slice(0, 5))
	}, [])
	

	return (
		<div className="slider-content">
			<Carousel
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
		</div>
	);
}
