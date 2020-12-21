import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export default function IndividualWorkListSort(props) {
    const numberSort = ["A-Z", "Z-A"];

    const handleClick = (event) => {
        props.sendNumberToParent(event.target.value);
    }


    return (
    <>
        <ListGroup>
        <ListGroupItem disabled action style={{backgroundColor: "#5d4037", color: "white"}}>Rikiavimas</ListGroupItem>
        {
          numberSort.map((number, i) => {
            return (
                <ListGroupItem value={number} action onClick={handleClick} key={i}>{number}</ListGroupItem>
            )
          })
        }
        </ListGroup>
    </>
  );
}
