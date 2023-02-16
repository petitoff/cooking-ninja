import { useEffect, useState } from "react";
import RecipeList from "../../components/Recipe/RecipeList";
import { projectFirestore } from "../../firebase/config";

import "./Home.css";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No recipes to load");
          setIsPending(false);
          return;
        }

        const results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setData(results);
      },
      (err) => {
        setError(err.message);
      }
    );

    setIsPending(false);

    return () => unsub();
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
