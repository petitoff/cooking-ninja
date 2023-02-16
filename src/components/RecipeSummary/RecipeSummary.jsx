import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useEffect, useState } from "react";

import { projectFirestore } from "../../firebase/config";

const RecipeSummary = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const { mode } = useTheme();
  const { id } = useParams();

  const handleUpdate = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "Updated title",
    });
  };

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setData(doc.data());
        } else {
          setError("No recipe found");
        }
      });

    setIsPending(false);

    return () => unsub();
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
          <button onClick={handleUpdate}>Update</button>
        </>
      )}
    </div>
  );
};

export default RecipeSummary;
