import RecipeCard from "./RecipeCard"
// import {useEffect, useState} from 'react'

function RecipeBook ({recipes, handleDelete}) {

  return (
    <div id="recipe-container">
      {recipes.map(recipe => <RecipeCard recipe={recipe} handleDelete={handleDelete}/>)}
    </div>
  )
}

export default RecipeBook