import { createContext, useEffect } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

const AppProvider = (props) => {
  useEffect(() => {
    console.log("fetch data");
  }, []);
  const data = {
    name: "Jane",
    role: "Student",
  };
  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export { AppContext, AppProvider };
