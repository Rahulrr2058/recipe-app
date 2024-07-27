import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : food.extendedIngredients && food.extendedIngredients.length > 0 ? (
        food.extendedIngredients.map((item) => (
          <Item key={item.id} item={item} />
        ))
      ) : (
        <p>No ingredients available.</p>
      )}
    </div>
  );
}
