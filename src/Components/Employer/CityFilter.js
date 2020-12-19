import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function CityFilter(props) {
    const uniqueCities = [];

    props.data.map(job => {
    if(uniqueCities.indexOf(job.city) === -1)
    uniqueCities.push(job.city)
    });

    const handleClick = (event) => {
        props.sendCityToParent(event.target.value);
    }

    const handleClickAll = () => {
      props.sendCityToParent(null);
    }

  return (
    <>
        <ListGroup>
        <ListGroupItem disabled action style={{backgroundColor: "#5d4037", color: "white"}}>Miestai</ListGroupItem>
        <ListGroupItem action onClick={handleClickAll}>Visi</ListGroupItem>
        {
          uniqueCities.map((city) => {
            return (
                <ListGroupItem value={city} action onClick={handleClick}>{city}</ListGroupItem>
            )
          })
        }
        </ListGroup>
    </>
  );
}
