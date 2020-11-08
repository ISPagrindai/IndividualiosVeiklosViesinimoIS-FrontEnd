
import CandidateTable from '../Components/Employer/CandidateTable'
export default function CandidatesView(props){
    
    return(
        <>
            <CandidateTable flag={props.flag}/>
        </>
    );
}