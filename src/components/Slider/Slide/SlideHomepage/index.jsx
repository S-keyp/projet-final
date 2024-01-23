import './index.css';

export default function FeaturedRecipeSlide({ recipe }) {
    return (
        <div className="slide">
            <img src={recipe.image} alt={recipe.name} />

            <h3 className='slide-title'>
                {recipe.name}
                <span>{recipe.rating}</span>
            </h3>


            <h5 className='slide-tags'>
                {recipe.tags.length &&
                    recipe.tags.map((tag, index) => <span key={index} className='tag'>{tag}</span>)
                }
            </h5>
            <div className="slide-infos">
                {recipe.instructions.length &&
                    recipe.instructions.map((instruction, index) => <p key={index}> {instruction} </p>)
                }
            </div>
        </div>
    );
}