import {Button} from 'react-bootstrap';
import JobTable from '../Components/Employer/JobTable'

export default function EmployersView(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 d-flex justify-content-center" style={{"background-color": "#d6f2c2", height: "100vh"}}>
                        <div className="align-self-center">
                            <div>
                                <h1>Įmonės pavadinimas</h1>
                            </div>
                            <div>
                                IMG
                            </div>
                            <div>
                                <h4>Trumpalaikių skelbimų skaičius:</h4>
                                <h4>7</h4>
                            </div>
                            <div>
                                <h4>Kandidatų skaičius skaičius:</h4>
                                <h4>76</h4>
                            </div>
                            <div>
                                <h4>Įvertis:</h4>
                                <h4>4.4/5</h4>
                            </div>
                            <div>
                                <h4>Atsiliepimų skaičius:</h4>
                                <h4>19</h4>
                            </div>
                            <div>
                                <Button href="newJob" variant="warning">Naujas skelbimas</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 d-flex justify-content-center" style={{"background-color": "#9DD9D2", height: "100vh"}}>
                        <div className="align-self-center rounded">
                            <JobTable employer={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}