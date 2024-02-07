import Search from "./components/Search";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Favourites from "./components/Favourites";
import useGlobalContext from "./hooks/globalContext";

function App() {
  const { name, role } = useGlobalContext();
  console.log(name);
  console.log(role);
  return (
    <main>
      <Search />
      <Favourites />
      <Meals />
      <Modal />
    </main>
  );
}

export default App;
