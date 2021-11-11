import React, {useState} from "react";
import {Link} from "react-router-dom"

function Form ({addRecipeToState, recipes}) {

  const [formData, setFormData] =useState({
    id: Math.floor(Math.random() * 1000),
    name:'',
    image:'',
    ingredients:'',
    instructions:'',
    type:''
  })

  // console.log(recipes.slice(-1).id)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(e.target.value)
  }

  const addRecipe = () => {
    const newRecipe ={ ...formData}
    addRecipeToState(newRecipe)
  }


  return (

    <div id="form-container">
      <form id="new-recipe-form">
        <label htmlFor="dishname">Name:</label><input class ="form-input" id="dishname" name="name" value={formData.dishname} onChange={handleChange}/>
        <label htmlFor="image">Image:</label><input class ="form-input" id="image" name="image" value={formData.image} placeholder= "Image URL"  onChange={handleChange}/>
        <label htmlFor="ingredients">Ingredients:</label> <textarea class ="form-input" id="ingredient-input" name="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Comma is required between each ingredient"/>
        <label htmlFor="instructions">Instructions:</label> <textarea class ="form-input" id="instruction-input" name="instructions" value={formData.instructions} onChange={handleChange}/>
        <label htmlFor="type">Type:</label>
        <select name='type' onChange={handleChange} id="typeSelect">Type:
            <option value=''></option>
            <option value='American'>American</option>
            <option value='Chinese'>Chinese</option>
            <option value='Thai'>Thai</option>
            <option value='Mexican'>Mexican</option>
            <option value='Italian'>Italian</option>
            </select>
        <Link to="/recipes">
          <button id="form-submit" onClick={() => addRecipe()}>Submit</button>
        </Link>

        </form>

    </div>

  )
}

export default Form;