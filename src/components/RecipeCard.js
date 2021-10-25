import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function RecipeCard ({recipe:{name, image, ingredients, instructions, servings}}) {
  return (
    
  <div id="card">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        <div id="ingredients">
          Ingredients: {ingredients.map(ingredient => <li>{ingredient}</li>)}
        </div>
        </Card.Text>
        <Card.Text>
        <div id="instructions">
          <p >Instructions: {instructions}</p>
        </div>
        </Card.Text>
        <Button variant="primary">Edit</Button>
    </Card.Body>
  </Card>
  </div>

    // <div>
    //   <img src={image} />
    //   <h1>{name}</h1>
    //   <h4>Yield: {servings}</h4>
    //   <p>Ingredients: {ingredients.map(ingredient => <li>{ingredient}</li>)}</p>
    //   <p>Instructions: {instructions}</p>
    // </div>
  )
}

export default RecipeCard