import "./RecipeList.css";

import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const RecipeSummary = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { error, isPending, data } = useFetch(url);

  console.log(url);
  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <h1>{data.title}</h1>}
    </div>
  );
};

export default RecipeSummary;
