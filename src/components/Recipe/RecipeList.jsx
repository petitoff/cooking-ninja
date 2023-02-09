import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;
