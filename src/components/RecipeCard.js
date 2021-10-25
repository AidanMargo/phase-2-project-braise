function RecipeCard ({recipe:{name, image, ingredients, instructions, servings}}) {
  return (
    <div>
      <img src={image} />
      <h1>{name}</h1>
      <h4>Yield: {servings}</h4>
      <p>Ingredients: {ingredients.map(ingredient => <li>{ingredient}</li>)}</p>
      <p>Instructions: {instructions}</p>
    </div>
  )
}

export default RecipeCard