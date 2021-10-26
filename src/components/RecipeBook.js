import RecipeCard from "./RecipeCard"
import {useEffect, useState} from 'react'

function RecipeBook ({recipes}) {

  return (
    <div id="recipe-container">
      {recipes.map(recipe => <RecipeCard recipe={recipe}/>)}
    </div>
  )
}

export default RecipeBook