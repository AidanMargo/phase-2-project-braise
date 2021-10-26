import Search from "./Search"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
function Header ({search}) {
  return (
    <>
    <div>
    <Navbar variant="dark" bg="dark">
      <Container >
      <Navbar.Brand href="#home" id="header-name">Braise</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <Search />
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  </>
  )
}

export default Header