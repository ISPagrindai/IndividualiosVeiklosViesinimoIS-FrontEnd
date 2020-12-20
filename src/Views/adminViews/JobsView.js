import AdminJobTable from '../../Components/AdminComponents/AdminJobTable'

export default function JobsView(){
    return(
        <>
            <div className="align-self-center rounded">
                <AdminJobTable flag={true} />
            </div>
        </>
    );
}