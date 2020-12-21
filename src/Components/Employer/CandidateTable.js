import { Table, Modal, Button } from "react-bootstrap";
import {useEffect, useState} from 'react'
import Candidate from './Candidate'
import {getJobCandidates, deleteCandidate} from '../../Services/JobService'
import { useParams} from 'react-router-dom'

export default function CandidateTable(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState();
  const [deleteId, setDeleteId] = useState();
  const { id } = useParams();

  useEffect(() =>{
    getJobCandidates(id).then((response) =>{
      setData(response)
    })
  }, [id])

  const clickHandler = () =>{
    deleteCandidate({jobId: parseInt(id), candidateId: parseInt(deleteId)}).then(() =>{
      setData(data.filter(d => d.id !== deleteId))
      setShow(false)
    })
  }
  const handleConfirm = () => {
    
  }

  return (
    <>
      <Table striped bordered variant="light">
        <thead>
          <tr>
            <th>Vardas</th>
            <th>Pavardė</th>
            <th>Gimimo data</th>
            <th>Lytis</th>
            <th>El. Paštas</th>
          </tr>
        </thead>
        {data ? (<tbody>
            {data.map(candidate => {
                return <Candidate key={candidate.id} show={handleShow} close={handleClose} setDeleteId={setDeleteId} flag={props.flag} data={candidate} />
            })}
        </tbody>) : null}
      </Table>
      <Button variant="secondary" onClick={handleConfirm}>Patvirtinti kandidatūrą</Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ar tikrai norite testi?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Prašome patvirtinti veiksmą</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={clickHandler}>Patvirtinti</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
