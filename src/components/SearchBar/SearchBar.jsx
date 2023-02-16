import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { projectFirestore } from "../../firebase/config";
import "./SearchBar.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [data, setData] = useState();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${term}`);
  };

  const handleFindTerm = (term) => {
    const results = data.filter((recipe) => {
      return recipe.title.toLowerCase().includes(term.toLowerCase());
    });

    setTerm(results[0].id);
  };

  useEffect(() => {
    const unsub = projectFirestore.collection("recipes").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          return;
        }

        const results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setData(results);
      },
      (err) => {
        console.log(err.message);
      }
    );

    return () => unsub();
  }, []);

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => handleFindTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
