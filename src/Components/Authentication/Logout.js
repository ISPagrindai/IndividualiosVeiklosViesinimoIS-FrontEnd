import { Button } from "react-bootstrap";
import cookie from "js-cookie";
import { useHistory } from "react-router-dom";

export default function Logout(props) {
  const history = useHistory()
  const clickHandler = () => {
    cookie.remove("TOKEN");
    props.setIsLoggedIn(false);
    history.push("/");
  };

  return (
    <Button variant="secondary" onClick={clickHandler}>
      Atsijungti
    </Button>
  );
}
