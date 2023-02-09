import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card">
      <h3>{recipe.title}</h3>
      <p>{recipe.cookingTime} to make.</p>
      <div>{recipe.method.substring(0, 100)}...</div>
      <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
    </div>
  );
};

export default RecipeCard;
