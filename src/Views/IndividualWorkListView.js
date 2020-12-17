import IndividualWorkList from '../Components/Employee/IndividualWorkList';

export default function IndividualWorkListView() {
  return (
    <>
      <h1 className="my-3">Individualių veiklų sąrašo puslapis</h1>
      <IndividualWorkList flag={false} />
    </>
  );
}
