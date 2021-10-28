import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Search from './Search'

function Header ({search, updateSearch}) {
  return (
    
    <div>
    <Navbar variant="dark" bg="dark">
      <Container >
      <Link to="/">
        <Navbar.Brand href="#home" id="header-name">Braise</Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Link to="/contactus">
          <Button variant="success">Contact</Button>
        </Link>
        <Link to="/recipes">
          <Button variant="success">Recipes</Button>
        </Link>
        <Link to="/new">
          <Button variant="success">Add a Recipe</Button>
        </Link>
      <Navbar.Text>
        <Search search={search} updateSearch={updateSearch}/>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header