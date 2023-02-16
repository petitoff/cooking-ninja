import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import DeleteIcon from "../../assets/delete-icon.svg";

import { projectFirestore } from "../../firebase/config";

const RecipeCard = ({ recipe }) => {
  const { mode } = useTheme();

  const handleDelete = () => {
    projectFirestore.collection("recipes").doc(recipe.id).delete();
  };

  return (
    <div className={`card ${mode}`}>
      <h3>{recipe.title}</h3>
      <p>{recipe.cookingTime} to make.</p>
      <div>{recipe.method.substring(0, 100)}...</div>
      <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
      <img
        className="delete"
        onClick={handleDelete}
        src={DeleteIcon}
        alt="delete"
      />
    </div>
  );
};

export default RecipeCard;
