import Header from "./Header"
import RecipeBook from './RecipeBook'
import Filter from './Filter'
import {useState, useEffect} from 'react'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom'
function App () {

  const [search, setSearch] = useState('')
  const [recipes, setRecipes] = useState([])

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
  return(
    <>
    <Header search={search} updateSearch={updateSearch}/>
    <Filter />
    <Route path="/recipes">
      <RecipeBook recipes={searchResults()}/>
    </Route>
    </>
  )
}

export default App;