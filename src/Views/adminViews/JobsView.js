import JobTable from '../../Components/Employer/JobTable'

export default function JobsView(){
    return(
        <>
            <div className="align-self-center rounded">
                <JobTable flag={true} />
            </div>
        </>
    );
}