import React, {useState} from "react";
import {NavLink, Link} from "react-router-dom"

function Form ({addRecipeToState}) {

  const [formData, setFormData] =useState({
    name:'',
    image:'',
    ingredients:'',
    instructions:'',
    type:''
  })

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

  const addRecipe = (e) => {
    e.preventDefault()
    const newRecipe ={ ...formData}
    addRecipeToState(newRecipe)
  }


  return (

    <div id="form-container">
      <form id="new-recipe-form">
        <label htmlFor="dishname">Name:</label><input class ="form-input" id="dishname" name="name" value={formData.dishname} onChange={handleChange}/>
        <label htmlFor="image">Image:</label><input class ="form-input" id="image" name="image" value={formData.image} onChange={handleChange}/>
        <label htmlFor="ingredients">Ingredients:</label> <input class ="form-input" id="ingredient-input" name="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Comma is required between each ingredient"/>
        <label htmlFor="instructions">Instructions:</label> <input class ="form-input" id="instruction-input" name="instructions" value={formData.instructions} onChange={handleChange}/>
        <select onChange={handleChange}>Type:
            <option value=''></option>
            <option value='American'>American</option>
            <option value='Chinese'>Chinese</option>
            <option value='Thai'>Thai</option>
            <option value='Mexican'>Mexican</option>
            <option value='Italian'>Italian</option>
            </select>
        <Link to="/recipes">
          <button onClick={(e) => addRecipe(e)}>Submit</button>
        </Link>

        </form>

    </div>

  )
}

export default Form;