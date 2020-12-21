import { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import JobTable from '../Components/Employer/JobTable'
import {getCurrentCompanyInfo} from '../Services/JobService'

export default function EmployersView(props){
    const [info, setInfo] = useState();
    useEffect(() =>{
        getCurrentCompanyInfo().then((response) =>{
            setInfo(response)
        })
    }, [])
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 d-flex justify-content-center" style={{"backgroundColor": "#d6f2c2", height: "100vh"}}>
                        {info ? (<div className="align-self-center">
                            <div>
                                <h1>{info.pavadinimas}</h1>
                            </div>
                            <div>
                                IMG
                            </div>
                            <div>
                                <h4>Trumpalaikių skelbimų skaičius:</h4>
                                <h4>{info.skelbimuSk}</h4>
                            </div>
                            <div>
                                <h4>Kandidatų skaičius skaičius:</h4>
                                <h4>{info.kandidatuSk}</h4>
                            </div>
                            <div>
                                <h4>Įvertis:</h4>
                                <h4>{info.ivertis}/10</h4>
                            </div>
                            <div>
                                <h4>Atsiliepimų skaičius:</h4>
                                <h4>{info.atsiliepimuSk}</h4>
                            </div>
                            <div>
                                <Button href="newJob" variant="warning">Naujas skelbimas</Button>
                            </div>
                        </div>) : null}
                    </div>
                    <div className="col-9 d-flex justify-content-center" style={{"backgroundColor": "#9DD9D2", height: "100vh"}}>
                        <div className="">
                            <JobTable flag={props.flag} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}