import './index.css';

export default function FeaturedRecipeSlide({recipe}) {
    return (
        <div className="slide">
            <img src={recipe.image} alt={recipe.name} />

                <h3>
                    {recipe.name}.
                </h3>

                {!!recipe.instructions.length && (
                    <strong>
                        {recipe.instructions.at(-1)}
                    </strong>
                )}
        </div>
    );
}