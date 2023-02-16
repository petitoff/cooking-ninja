import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Search.css";
import RecipeList from "../../components/Recipe/RecipeList";

import { projectFirestore } from "../../firebase/config";

const Search = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  useEffect(() => {
    setIsPending(true);

    // find from firestore the recipe with the id
    const unsub = projectFirestore
      .collection("recipes")
      .doc(query)
      .onSnapshot(
        (doc) => {
          if (doc.exists) {
            setData([doc.data()]);
          } else {
            setError("No recipe found");
          }
        },
        (err) => {
          setError(err.message);
        }
      );

    setIsPending(false);

    return () => unsub();
  }, [query]);

  if (data?.length === 0) {
    return (
      <div className="search">
        <h2 className="page-title">No recipes found</h2>
      </div>
    );
  }
  return (
    <div>
      <h2 className="page-title">
        Reciples including {data?.length > 1 ?? data[0].title}
      </h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
