import React, {useState} from "react";

function Form ({addRecipeToState}) {

  const [formData, setFormData] =useState({
    name:'',
    image:'',
    ingredients:'',
    instructions:''
  })

  const handleChange = (e) => setFormData(e.target.value)

  const addRecipe = (e) => {
    e.preventDefault()
    const newRecipe ={formData}
    addRecipeToState(newRecipe)
    console.log("submitted")
  }


  return (
    <div>
      <form >
        <label htmlFor="dishname">Name:</label><input id="dishname" name="dishname" value={formData.dishname} onChange={handleChange}/>
        <label htmlFor="image">Image:</label><input id="image" name="image" value={formData.image} onChange={handleChange}/>
        <label htmlFor="ingredients">Ingredients:</label><input id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChange}/>
        <label htmlFor="instructions">Instructions:</label> <input id="instructions" name="instructions" value={formData.instructions} onChange={handleChange}/>
        <button onClick={addRecipe}>Submit</button>
      </form>

    </div>
  )
}

export default Form;