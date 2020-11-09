import { Button } from 'react-bootstrap';


export default function AdminView() {
    return (
        <>
            <div>
                <Button href="adminForm" style={{float: "right"}}>Kurti naują administratorių</Button>
            </div>
                <br></br>
            <div className="row">
                <div className="col-4">
                    <Button className="mb-3" size="lg" href="individualWork" >Peržiūrėti individualių darbų sąrašą</Button>
                    <Button size="lg" href="jobs">Peržiūrėti trumpalaikių darbų sąrašą</Button>
                </div>
                <div className="col-4">
                    <Button className="mb-3" size="lg" href="employerAdmin" >Peržiūrėti įmonių sąrašą</Button>    
                    <Button size="lg" href="newEmployer" >Peržiūrėti naujų įmonių sąrašą</Button>
                </div>
                <div className="col-4">
                    <Button className="mb-3" size="lg" href="user" >Peržiūrėti klientų paskyrų sąrašą</Button>
                    <Button size="lg" href="reports" >Peržiūrėti ataskaitas</Button>
                </div>

            </div>
        </>
    );
}