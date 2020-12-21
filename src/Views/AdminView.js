import {Button} from 'react-bootstrap';
import RegisterAdmin from '../Components/Authentication/RegisterAdmin'

export default function Home(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm d-flex justify-content-center" style={{"background-color": "#d6f2c2", height: "100vh"}}>
                        <div className="align-self-center">
                            
                            <div>
                                <Button href="individualWorkAdmin" size="lg" variant="secondary">Peržiūrėti individualių darbų sąrašą</Button>
                            </div>  
                            <br></br>                         
                            <div>
                                <Button href="jobs" size="lg" variant="secondary">Peržiūrėti trumpalaikių darbų sąrašą</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm d-flex justify-content-center" style={{"background-color": "#b9e4f4", height: "100vh"}}>
                        <div className="align-self-center">
                            
                            <div>
                                <Button href="employerAdmin" size="lg" variant="secondary">Peržiūrėti įmonių sąrašą</Button>
                            </div>
                            <br></br>  
                            <div>
                                <Button href="newEmployer" size="lg" variant="secondary">Peržiūrėti naujų įmonių sąrašą</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm d-flex justify-content-center" style={{"background-color": "#9DD9D2", height: "100vh"}}>
                        <div className="align-self-center">
                            <div>
                                <Button href="user" size="lg" variant="secondary">Peržiūrėti klientų paskyrų sąrašą</Button>
                            </div>
                            <br></br>  
                            <div>
                                <Button href="reports" size="lg" variant="secondary">Peržiūrėti ataskaitas</Button>
                            </div>
                            <br></br>                            
                            <RegisterAdmin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}