import Header from "./Header"
import RecipeBook from './RecipeBook'
import Filter from './Filter'
import {useState, useEffect} from 'react'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom'
import Form from "./Form"

function App () {

  const [search, setSearch] = useState('')
  const [recipes, setRecipes] = useState([])
  const [filter, setFilter] = useState('')

  const updateSearch = (input) => {
    setSearch(input)
  }

  useEffect(() => {
    fetch ('http://localhost:4000/recipes')
    .then(resp => resp.json())
    .then (data => setRecipes(data))
  } , [])

  const searchResults = () => {
    return search.length > 0 ? recipes.filter(recipe => recipe.name.toLowerCase().includes(search)) : recipes
  }

  const addRecipeToState = (userRecipeInput) => {
    const updatedRecipeList = [userRecipeInput, ...recipes]
    setRecipes(updatedRecipeList)
  }

  const handleFilter = (e) => {
    setFilter(e.target.innerText)
    console.log(e.target.innerText)
  }

  const filteredRecipes = () => {
    switch(filter) {
      case 'American':
        return recipes.filter(recipe => recipe.type === 'American')
      case 'Mexican':
        return recipes.filter(recipe => recipe.type === 'Mexican')
      case 'Chinese':
        return recipes.filter(recipe => recipe.type === 'Chinese')
      case 'Thai':
        return recipes.filter(recipe => recipe.type === 'Thai')
      case 'Italian':
        return recipes.filter(recipe => recipe.type === 'Italian')
      default:
        return recipes;
    }
  }

  return(
    <>
    <Header search={search} updateSearch={updateSearch}/>
    <Filter handleFilter={handleFilter}/>
    <Route path="/recipes">
      <RecipeBook recipes={filteredRecipes()}/>
    </Route>
    <Form addRecipeToState={addRecipeToState}/>
    </>
  )
}

export default App;