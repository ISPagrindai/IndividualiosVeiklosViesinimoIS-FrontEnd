import { Button } from "react-bootstrap";

export default function Job() {
  return (
    <>
      <h1>Trumpalaikio darbo puslapis</h1>
      <Button href="../review" variant="primary">
        Imonės atsiliepimas
      </Button>{" "}
      <Button href="../applicant" variant="secondary">
        Pretenduoti
      </Button>{" "}
    </>
  );
}
