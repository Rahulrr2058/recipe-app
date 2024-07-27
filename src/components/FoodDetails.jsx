import { useEffect, useState } from "react";
import styles from "./foodfetails.module.css";
import ItemList from "./ItemList";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState(null); // Initialize as null instead of {}
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = "7e8c402ad5d9499bb4e2a1dafaefe7b4";
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setFood(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFood();
  }, [foodId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt={food.title} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦 Serves: {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "☘️ Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>
              $ {(food.pricePerServing / 100).toFixed(2)} Per Serving
            </strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {food.analyzedInstructions &&
            food.analyzedInstructions.length > 0 ? (
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            ) : (
              <p>No instructions available.</p>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
