import Search from "./Search"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Header ({search, updateSearch}) {
  return (
    <>
    <style>
      {`
      .btn-`}
    </style>
    <div>
    <Navbar variant="dark" bg="dark">
      <Container >
      <Navbar.Brand href="#home" id="header-name">Braise</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <span><Button variant="info">Recipes</Button></span>
      <Navbar.Text>
        <Search search={search} updateSearch={updateSearch}/>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  </>
  )
}

export default Header