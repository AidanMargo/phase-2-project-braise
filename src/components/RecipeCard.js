import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'

function RecipeCard ({recipe, recipe:{id, name, image, ingredients, instructions, servings}, handleDelete}) {

  const [Edit, setEdit] = useState(false);
  const [updatedIng, setUpdatedIng] = useState(ingredients);


  const updateIngredients = (e, id) => { 
    const newIngredients= e.target.value;

    fetch(`http://localhost:4000/recipes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredients: newIngredients
      })
    })
    .then(setUpdatedIng(newIngredients))
  }

  const handleEdit = () => setEdit(!Edit)




  const ingredientEdit = () => {
    return(
  <>
    <label htmlFor="ingredients">Ingredients:</label> 
    <textarea class ="form-input" 
    id="ingredient-edit-input" 
    name="ingredients" 
    value={updatedIng} 
    onChange={e => updateIngredients(e, id)} 
    placeholder="Comma is required between each ingredient"/>
  </>
    )}

  return (
 <>
  <div id="card" class="yes">
    <Card  style={{ width: '18rem' }} onClick={() => console.log(recipe)}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        <div id="ingredients">
          {Edit? ingredientEdit(): updatedIng.split(",").map(ingredient => <li>{ingredient}</li>)}
        </div>
        </Card.Text>
        <Card.Text>
        <div id="instructions">
          <h3>Instructions: </h3>
          <p>{instructions}</p>
        </div>
        </Card.Text>
        <div id="button-container">
          <Button variant="info" onClick={() => handleEdit()}>Edit<i class="fas fa-edit"></i></Button>
          <Button variant="danger" onClick={() => handleDelete(recipe.name, recipe.id)}><i class="fas fa-trash-alt"></i></Button>
        </div>
    </Card.Body>
  </Card>
  </div>
</>
    // <div>
    //   <img src={image} />
    //   <h1>{name}</h1>
    //   <h4>Yield: {servings}</h4>
    //   Ingredients: {ingredients.split(",").map(ingredient => <li>{ingredient}</li>)}
    //   <p>Instructions: {instructions}</p>
    // </div>
  )
}

export default RecipeCard