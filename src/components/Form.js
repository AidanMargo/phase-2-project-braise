import React, {useState} from "react";
import Ingredient from "./Ingredient";
function Form ({addRecipeToState}) {

  const [formData, setFormData] =useState({
    name:'',
    image:'',
    ingredients:[],
    instructions:''
  })

  const handleChange = (e) => setFormData(e.target.value)

  const addRecipe = (e) => {
    e.preventDefault()
    const newRecipe ={formData}
    addRecipeToState(newRecipe)
    console.log("submitted")
  }

  const addIngredient = (e) => {
    e.preventDefault()
    
  }

  return (
    <div id="form-container">
      <form id="new-recipe-form">
        <label htmlFor="dishname">Name:</label><input id="dishname" name="dishname" value={formData.dishname} onChange={handleChange}/>
        <label htmlFor="image">Image:</label><input id="image" name="image" value={formData.image} onChange={handleChange}/>
        <label htmlFor="ingredients">Ingredients:</label> <input id="ingredient-input" name="ingredient" value={formData.ingredient} onChange={handleChange}/>
        <label htmlFor="instructions">Instructions:</label> <input id="instruction-input" name="instructions" value={formData.instructions} onChange={handleChange}/>
        <button onClick={addIngredient}>Add Ingredient</button>
        <button onClick={addRecipe}>Submit</button>
      </form>

    </div>
  )
}

export default Form;