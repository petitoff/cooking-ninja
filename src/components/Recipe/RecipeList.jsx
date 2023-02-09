import "./RecipeList.css";
import RecipeSummary from "./RecipeSummary";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeSummary recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;
