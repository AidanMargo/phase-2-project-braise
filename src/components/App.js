import Header from "./Header"
import RecipeBook from './RecipeBook'
import Filter from './Filter'
import {useState, useEffect} from 'react'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom'
import Form from "./Form"
import ContactUs from "./ContactUs"

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
    fetch('http://localhost:4000/recipes', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userRecipeInput)
    }).then(setRecipes(updatedRecipeList)).then(console.log(updatedRecipeList))
  }

  const handleFilter = (e) => {
    setFilter(e.target.innerText)
    // console.log(e.target.innerText)
  }

  const filteredRecipes = () => {
    if (filter === "" || filter === "All") {
      return searchResults()
    } else {
    return recipes.filter(recipe => recipe.type === filter)
    }

    // switch(filter) {
    //   case 'American':
    //     return recipes.filter(recipe => recipe.type === 'American')
    //   case 'Mexican':
    //     return recipes.filter(recipe => recipe.type === 'Mexican')
    //   case 'Chinese':
    //     return recipes.filter(recipe => recipe.type === 'Chinese')
    //   case 'Thai':
    //     return recipes.filter(recipe => recipe.type === 'Thai')
    //   case 'Italian':
    //     return recipes.filter(recipe => recipe.type === 'Italian')
    //   default:
    //     return searchResults();
    // }
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/recipes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(setRecipes(recipes.filter(recipe => recipe.id !== id)))
    .then(console.log('Success'))
  }


  return(
    <>
    <Header search={search} updateSearch={updateSearch}/>
    <Filter handleFilter={handleFilter}/>
    <Route exact path="/recipes" >
      <RecipeBook recipes={filteredRecipes()} handleDelete={handleDelete}/>
    </Route>
    <Route exact path="/" >
      <RecipeBook recipes={filteredRecipes()} handleDelete={handleDelete}/>
    </Route>
    <Route exact path="/new">
      <Form addRecipeToState={addRecipeToState}/>
    </Route>
    <Route exact path="/contactus">
      <ContactUs/>
    </Route>
    </>
  )
}

export default App;