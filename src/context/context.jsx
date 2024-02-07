import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AppContext = createContext();

const AppProvider = (props) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  //const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

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
  }, []);

  const data = {
    meals: meals,
    loading: loading,
  };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export { AppContext, AppProvider };
