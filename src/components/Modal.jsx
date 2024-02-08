import useGlobalContext from "../hooks/globalContext";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();

  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;
  return (
    <aside className="modal-overlay">
      <section className="modal-container">
        <img src={image} alt={title} className="img modal-img" />
        <section className="modal-content">
          <h4>{title}</h4>
          <p>Cooking Instructions</p>
          <p>{text}</p>
          <a href={source} target="_blank" rel="noreferrer">
            Original Source
          </a>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            close
          </button>
        </section>
      </section>
    </aside>
  );
};

export default Modal;
