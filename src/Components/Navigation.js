import { Navbar, Nav } from "react-bootstrap";
import Login from './Login'
import Register from './Register'

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="home">PanikaIS</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="home">Pradžia</Nav.Link>
      <Nav.Link href="individualWork">Individuali veikla</Nav.Link>
      <Nav.Link href="employees">Ieškantiems darbo</Nav.Link>
      <Nav.Link href="employers">Darbdaviams</Nav.Link>
      <Nav.Link href="admin">Administratoriams</Nav.Link>
    </Nav>
    <Nav>
      <Register />
      <Login />
    </Nav>
  </Navbar>
  );
}
