import { Button } from "react-bootstrap";
import cookie from "js-cookie";

export default function Logout(props) {
  const clickHandler = () => {
    cookie.remove("TOKEN");
    props.setIsLoggedIn(false);
  };

  return (
    <Button variant="secondary" onClick={clickHandler}>
      Atsijungti
    </Button>
  );
}
