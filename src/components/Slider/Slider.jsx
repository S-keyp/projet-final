import 'swiper/css';
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import { useContext } from "react";
import { DishListContext } from "../../model/utils/context/DishListContext";
import FeaturedRecipeSlide from "./Slide/SlideHomepage";


SwiperCore.use([Autoplay]);

export default function Slider() {
	const { dishListState, getFirstFiveElts } = useContext(DishListContext);

	return (

		<Swiper
			loop={true}
			speed={500}
			autoplay={{
				delay: 5000,
			}}
		>
			{dishListState &&
				dishListState.length > 0 &&
				getFirstFiveElts().map((slide, index) => {
					return (
						<SwiperSlide key={index}>
							<FeaturedRecipeSlide recipe={slide} />
						</SwiperSlide>
					)
				})
			}
		</Swiper>
	);

}
