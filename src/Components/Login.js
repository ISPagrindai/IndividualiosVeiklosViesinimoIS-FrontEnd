import { Button, Modal } from 'react-bootstrap'
import LoginService from '../Services/LoginService'

export default function Login(){

    const onClickHandler = () =>{
        console.log("Pavyko");
    }
    return (
        <Button variant="secondary" onClick={onClickHandler}>Prisijungti</Button>
    );
}