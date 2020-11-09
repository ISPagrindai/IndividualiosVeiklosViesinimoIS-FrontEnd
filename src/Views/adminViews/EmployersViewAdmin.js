import EmployerTable from '../../Components/AdminComponents/EmployerTable'

export default function EmployersViewAdmin(){
    return(
        <>
            <div className="align-self-center rounded">                
                <EmployerTable flag={true} />
            </div>
        </>
    );
}