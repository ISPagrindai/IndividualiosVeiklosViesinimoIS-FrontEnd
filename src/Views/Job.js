import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Job() {
  const { id } = useParams();
  return (
    <>
      <h1>Trumpalaikio darbo puslapis</h1>
      <Button href={`${id}/candidates`} variant="secondary">
        Kandidatų sąrašas
      </Button>
      <Button href="../review" variant="primary">
        Imonės atsiliepimas
      </Button>{" "}
      <Button href="../applicant" variant="secondary">
        Pretenduoti
      </Button>{" "}
    </>
  );
}
