import Button from "react-bootstrap/Button";
import {useState, useEffect} from 'react'
import {getNewEmpolyers, confirmEmployer} from '../../Services/NewEmployerService'

export default function NewEmployer(props) { 
   const [show, setShow] = useState(false);
   const [temp, setTemp] = useState();
  const [id, setId] = useState();

   useEffect(() =>{
    getNewEmpolyers().then(response => setTemp(response));
   }, [])
  const unfreezeHandler = () => {
     confirmEmployer({ arUzsaldytas: false, idImone: id }).then(() => {
       setShow(false);
       setTemp(temp.filter(i => i.id !== id));  
     } )
  }
 
  return (
    <tr>
      <td>
        <a href={`employer/${props.data.id}`}>{props.data.pavadinimas}</a>
      </td>    
      <td>{props.data.imonesKodas}</td>
      <td>{props.data.vadovas}</td>
      <td>{props.data.tinklalapis}</td>
      <td>{props.data.telNr}</td>
      <td>{props.data.elPastas}</td>
      <td>{props.data.miestas}</td>
      <td>{props.data.adresas}</td>
      {props.flag ? (
        <td>                  
          <Button variant="secondary" onClick={unfreezeHandler}>
            Patvirtinti
          </Button>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
}
