import Header from "./Header"
import RecipeBook from './RecipeBook'
import Search from './Search'
import {useState} from 'react'
import '../style.css'


function App () {

  const [search, setSearch] = useState('')

  return(
    <>
    <Header />
    <Search search={search}/>
    <RecipeBook />
    
    </>
  )
}

export default App;