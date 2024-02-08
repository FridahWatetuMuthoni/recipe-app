import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AppContext = createContext();

const AppProvider = (props) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());
  const allMealsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const response = await axios(url);
      const data = response.data;

      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, [allMealsUrl]);

  const fetchRandomMeals = () => {
    fetchMeals(randomMealUrl);
  };

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;

    if (favoriteMeal) {
      meal = favorites.find((meal) => meal.idMeal === idMeal);
    } else {
      meal = meals.find((meal) => meal.idMeal === idMeal);
    }

    setSelectedMeal(meal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addToFavorites = (idMeal) => {
    const alreadyFavourite = favorites.find((meal) => meal.idMeal === idMeal);
    if (alreadyFavourite) return;

    const meal = meals.find((meal) => meal.idMeal === idMeal);

    const updatedFavorites = [...favorites, meal];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  function getFavoritesFromLocalStorage() {
    let favorites = localStorage.getItem("favorites");

    if (favorites) {
      favorites = JSON.parse(localStorage.getItem("favorites"));
    } else favorites = [];

    return favorites;
  }

  const data = {
    meals,
    loading,
    setSearchTerm,
    fetchRandomMeals,
    showModal,
    setShowModal,
    selectMeal,
    selectedMeal,
    closeModal,
    favorites,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export { AppContext, AppProvider };
