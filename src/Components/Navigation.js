import { Navbar, Nav, Button } from "react-bootstrap";
import Login from './Authentication/Login'
import Register from './Authentication/Register'
import Logout from './Authentication/Logout'

export default function Navigation(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">PanikaIS</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Pradžia</Nav.Link>
        <Nav.Link href="/individualWorkList">Individuali veikla</Nav.Link>
        <Nav.Link href="/employees">Ieškantiems darbo</Nav.Link>
        <Nav.Link href="/employers">Darbdaviams</Nav.Link>
        <Nav.Link href="/admin">Administratoriams</Nav.Link>
      </Nav>
      <Nav>
        {props.isLoggedIn ? (
          <div>
            <Button className="my-1 mr-3" variant="success" href={`/individualWorkForm`}>Sukurti veiklą</Button>
            <Logout setIsLoggedIn={props.setIsLoggedIn} />
          </div>
        ) : (
          <>
            <Register />
            <Login setIsLoggedIn={props.setIsLoggedIn} />
          </>
        )}
      </Nav>
    </Navbar>
  );
}
