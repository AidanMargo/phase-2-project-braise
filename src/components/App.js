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
    fetch (`${process.env.REACT_APP_API_URL}/recipes`)
    .then(resp => resp.json())
    .then (data => setRecipes(data))
  } , [])

  const searchResults = () => {
    return search.length > 0 ? recipes.filter(recipe => recipe.name.toLowerCase().includes(search.toLowerCase())) : recipes
  }

  const addRecipeToState = (userRecipeInput) => {
    const updatedRecipeList = [...recipes,userRecipeInput]
    fetch(`${process.env.REACT_APP_API_URL}/recipes`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userRecipeInput)
    }).then(setRecipes(updatedRecipeList)).then(console.log(updatedRecipeList))
  }

  const handleFilter = (e) => {
    setFilter(e.target.innerText)
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

  const handleDelete = (name, id) => {
    const deletePrompt = prompt(`Are you sure you want to delete your ${name} recipe? Enter 'Yes' or 'No'`)
    if(deletePrompt.toLowerCase() === 'yes'){
    fetch(`${process.env.REACT_APP_API_URL}/recipeS/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(setRecipes(recipes.filter(recipe => recipe.id !== id)))
    .then(console.log(recipes))
    }
  }

  

  return(
    <>
    <Header search={search} updateSearch={updateSearch}/>
    
    {/* <Route exact path="/recipes" >
      <Filter handleFilter={handleFilter}/>
      <RecipeBook recipes={filteredRecipes()} handleDelete={handleDelete}/>
    </Route> */}
    <Route path="/recipes" >
      <Filter handleFilter={handleFilter}/>
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