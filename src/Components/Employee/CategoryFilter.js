import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export default function CategoryFilter(props) {
    const uniqueCategories = [];

    props.data.map(work => {
    if(uniqueCategories.indexOf(work.category) === -1)
        uniqueCategories.push(work.category)
    });

    const handleClick = (event) => {
      props.sendCategoryToParent(event.target.value);
    }

    const handleClickAll = () => {
      props.sendCategoryToParent(null);
    }


    return (
    <>
        <ListGroup>
        <ListGroupItem disabled action style={{backgroundColor: "#5d4037", color: "white"}}>Kategorijos</ListGroupItem>
        <ListGroupItem action onClick={handleClickAll}>Visos</ListGroupItem>
        {
          uniqueCategories.map((category, i) => {
            return (
                <ListGroupItem value={category} action onClick={handleClick} key={i}>{category}</ListGroupItem>
            )
          })
        }
        </ListGroup>
    </>
  );
}
