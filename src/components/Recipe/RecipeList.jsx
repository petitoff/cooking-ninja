// eslint-disable-next-line import/no-unresolved
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  if (recipes?.length === 0)
    return <div className="error">No recipes found</div>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={index} />
      ))}
    </div>
  );
};

export default RecipeList;
