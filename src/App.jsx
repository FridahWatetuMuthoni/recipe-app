import Search from "./components/Search";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Favourites from "./components/Favourites";

function App() {
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
