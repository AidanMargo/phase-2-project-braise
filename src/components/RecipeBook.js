import RecipeCard from "./RecipeCard"
import {useEffect, useState} from 'react'

function RecipeBook () {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch ('http://localhost:4000/recipes')
    .then(resp => resp.json())
    .then (data => setRecipes(data))
  } , [])

  return (
    <div>
      {recipes.map(recipe => <RecipeCard recipe={recipe}/>)}
    </div>
  )
}

export default RecipeBook