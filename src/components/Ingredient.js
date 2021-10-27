function Ingredient({formData, handleChange}) {
  return(
  <div className="ingredient">
    <label htmlFor="ingredients">Ingredient:</label>
    <input 
    type ="textarea" 
    id="ingredient-input" 
    name="ingredients" 
    value={formData.ingredients} 
    onChange={handleChange}/>
    
  </div>  
  )
}

export default Ingredient