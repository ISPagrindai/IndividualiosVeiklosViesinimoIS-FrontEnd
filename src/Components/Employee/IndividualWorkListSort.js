import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export default function IndividualWorkListSort(props) {
    const numberSort = ["A-Z", "Z-A"];

    const handleClick = (event) => {
        props.sendNumberToParent(event.target.value);
    }

    const handleClickAll = () => {
        props.sendNumberToParent(null);
    }

    return (
    <>
        <ListGroup>
        <ListGroupItem disabled action style={{backgroundColor: "#5d4037", color: "white"}}>Rikiavimas</ListGroupItem>
        <ListGroupItem action onClick={handleClickAll}>Pradinis</ListGroupItem>
        {
          numberSort.map((number) => {
            return (
                <ListGroupItem value={number} action onClick={handleClick}>{number}</ListGroupItem>
            )
          })
        }
        </ListGroup>
    </>
  );
}
