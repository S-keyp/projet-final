import { useContext, useState, useEffect } from "react";
import { DishListContext } from "../model/utils/context/DishListContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";


export default function Homepage() {
  const { dishListState, getFirstFiveElts } = useContext(DishListContext)
  const [sliderElts, setSliderElts] = useState([])

  useEffect(() => {
    if(dishListState) {
      setSliderElts(getFirstFiveElts())
    }
  }, [dishListState])

  return (
    <div className="homepage">
      <h2>Welcome to our restaurant !</h2>


      { sliderElts &&
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
      {/* 
    - Un slider présentant quelques plats principaux présents sur la carte

    - Un bouton CTA (Call To Action) permettant à l'utilisateur de passer commande

    - Un pied de page reprenant les liens vers les différentes pages, un lien vers le plan du site et un lien qui mène vers l'interface de gestion du stock 
    */}
    </div>
  )
};