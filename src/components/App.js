import Header from "./Header"
import RecipeBook from './RecipeBook'
import Filter from './Filter'
import {useState} from 'react'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {

  const [search, setSearch] = useState('')

  return(
    <>
    <Header search={search}/>
    <Filter />
    <RecipeBook />
    
    </>
  )
}

export default App;