import AdminIndividualWrokTable from "../../Components/AdminComponents/AdminIndividualWorkTable"

export default function IndividualWorkListViewAdmin() {
    return (
        <>
            <div className="align-self-center rounded">                
                <AdminIndividualWrokTable flag={true} />
            </div>
        </>
    )
}