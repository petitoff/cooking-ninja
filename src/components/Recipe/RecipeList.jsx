// eslint-disable-next-line import/no-unresolved
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";
import PropTypes from "prop-types";

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0)
    return <div className="error">No recipes found</div>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      cookingTime: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
    })
  ).isRequired,
};
