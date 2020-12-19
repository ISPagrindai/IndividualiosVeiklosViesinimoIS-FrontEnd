import NewEmployerTable from '../../Components/AdminComponents/NewEmployerTable'

export default function NewEmployer(){
    return(
        <>
        <h1>Naujų įmonių sąrašas</h1>
        <div className="align-self-center rounded">                
                <NewEmployerTable flag={true} />
        </div>
        </>
    );
}