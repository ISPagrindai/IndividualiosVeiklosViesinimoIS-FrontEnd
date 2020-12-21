import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {getWorkTypes} from '../../Services/WorkerService';
import {useState, useEffect} from 'react';


export default function CategoryFilter(props) {
  const [workTypes, setWorkTypes] = useState();


    useEffect(() =>{
      getWorkTypes().then(response => setWorkTypes(response));
    },[])

    const handleClick = (event) => {
      props.sendCategoryToParent(event.target.value);
    }

    const handleClickAll = () => {
      props.sendCategoryToParent(null);
    }


    return (
    <> { workTypes ?
        <ListGroup>
        <ListGroupItem disabled action style={{backgroundColor: "#5d4037", color: "white"}}>Kategorijos</ListGroupItem>
        <ListGroupItem action onClick={handleClickAll}>Visos</ListGroupItem>
        {
          workTypes.map((category, i) => {
            return (
                <ListGroupItem value={category.pavadinimas} action onClick={handleClick} key={i}>{category.pavadinimas}</ListGroupItem>
            )
          })
        }
        </ListGroup>
        : null }
    </>
  );
}
