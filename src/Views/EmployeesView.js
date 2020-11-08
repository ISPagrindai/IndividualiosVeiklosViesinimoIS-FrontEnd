import JobTable from '../Components/Employer/JobTable'
export default function EmployeesView(){
    return(
        <>
            <h1>Sveiki darbuotojai, rinkites iš darbų</h1>
            <JobTable flag={false} />
        </>
    );
}