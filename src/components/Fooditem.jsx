import styles from "./fooditem.module.css";
function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.image} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemTitle}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setFoodId(food.id);
          }}
          className={styles.itembutton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default FoodItem;
