import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export default function CategoryFilter(props) {
    const uniqueCategories = [];

    props.data.map(work => {
    if(uniqueCategories.indexOf(work.category) === -1)
        uniqueCategories.push(work.category)
    });

    const handleClick = (event) => {
      props.sendDataToParent(event.target.value);
    }

    const handleClickAll = () => {
      props.sendDataToParent(null);
    }


    return (
    <>
        <ListGroup>
        <ListGroupItem action onClick={handleClickAll}>Visos kategorijos</ListGroupItem>
        {
          uniqueCategories.map((category) => {
            return (
                <ListGroupItem value={category} action onClick={handleClick}>{category}</ListGroupItem>
            )
          })
        }
        </ListGroup>
    </>
  );
}
