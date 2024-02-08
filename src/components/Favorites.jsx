import useGlobalContext from "../hooks/globalContext";

const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();
  return (
    <section className="favorites">
      <section className="favorites-content">
        <h5>Favorites</h5>
        <section className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image } = item;
            return (
              <section key={idMeal} className="favorite-item">
                <img
                  src={image}
                  alt="favorites-image"
                  className="favorites-img img"
                  onClick={() => selectMeal(idMeal, true)}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(idMeal)}
                >
                  remove
                </button>
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Favorites;
