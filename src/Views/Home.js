import {Button} from 'react-bootstrap';

export default function Home(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm d-flex justify-content-center" style={{"background-color": "#d6f2c2", height: "100vh"}}>
                        <div className="align-self-center">
                            <div>
                                <h3>Ieškai papildomo darbo?</h3>
                            </div>
                            <div>
                                IMG
                            </div>
                            <div>
                                <p>Išsirink patinkantį darbą sau tinkamu metu ir kandidatuok.</p>
                            </div>
                            <div>
                                <Button href="/employees" size="lg" variant="secondary">Ieškau darbo</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm d-flex justify-content-center" style={{"background-color": "#b9e4f4", height: "100vh"}}>
                        <div className="align-self-center">
                            <div>
                                <h3>Reikia darbuotojų skubiai?</h3>
                            </div>
                            <div>
                                IMG
                            </div>
                            <div>
                                <p>Siūlome naują ir modernų būdą surasti darbuotojus trumpalaikiams darbams.</p>
                            </div>
                            <div>
                                <Button href="/employers" size="lg" variant="secondary">Reikia darbuotojų</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm d-flex justify-content-center" style={{"background-color": "#9DD9D2", height: "100vh"}}>
                        <div className="align-self-center">
                            <div>
                                <h3>Esi savo srities specialistas?</h3>
                            </div>
                            <div>
                                IMG
                            </div>
                            <div>
                                <p>Įkelk savo sugebėjimus ir teikiamas paslaugas ir būk pastebėtas</p>
                            </div>
                            <div>
                                <Button href="/individualWork" size="lg" variant="secondary">Teikiu paslaugas</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}