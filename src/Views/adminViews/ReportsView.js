import { Button } from 'react-bootstrap';
export default function ReportsView() {
    return(
        <>
            <h1>Atasakaitos</h1>
            <div>
                <Button href="report/:id" >Peržiūrėti atasakaitą</Button>
            </div>
        </>
    );
}   