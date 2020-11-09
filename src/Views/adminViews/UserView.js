import UserTable from '../../Components/AdminComponents/UserTable'

export default function UserView(){
    return(
        <>
            <div className="align-self-center rounded">                
                <UserTable flag={true} />
            </div>
        </>
    );
}