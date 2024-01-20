import Slider from "../components/Slider/Slider";

function Homepage() {
  return <div className="homepage">
    <h2>Welcome to our restaurant !</h2>
    <Slider />
    {/* 
    - Un slider présentant quelques plats principaux présents sur la carte

    - Un bouton CTA (Call To Action) permettant à l'utilisateur de passer commande

    - Un pied de page reprenant les liens vers les différentes pages, un lien vers le plan du site et un lien qui mène vers l'interface de gestion du stock 
    */}
  </div>
};

export default Homepage;
