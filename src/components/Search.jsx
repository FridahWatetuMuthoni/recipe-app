import { useState } from "react";
import useGlobalContext from "../hooks/globalContext";

const Search = () => {
  const { setSearchTerm, fetchRandomMeals } = useGlobalContext();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(text);
    e.currentTarget.reset();
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeals();
  };

  return (
    <header className="search-container">
      <form action="" onSubmit={handleSubmit}>
        <input
          placeholder="type favourite meal"
          type="text"
          name="search"
          id="search"
          className="form-input"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="btn">
          search
        </button>
        <button className="btn btn-hipter" onClick={handleRandomMeal}>
          surprise me!
        </button>
      </form>
    </header>
  );
};

export default Search;
