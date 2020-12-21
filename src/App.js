import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import cookie from "js-cookie";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { VerifyToken } from "./Services/LoginService";
import Navigation from "./Components/Navigation";
import EmployeesView from "./Views/EmployeesView";
import EmployersView from "./Views/EmployersView";
import IndividualWorkView from "./Views/IndividualWorkView";
import IndividualWorkListView from "./Views/IndividualWorkListView";
import AdminView from "./Views/AdminView";
import Home from "./Views/Home";
import Footer from "./Components/Footer";
import UserProfile from "./Views/UserProfile";
import EmployeeReviewForm from "./Views/EmployeeReviewForm";
import Job from "./Views/Job";
import JobForm from "./Views/JobForm";
import VipForm from "./Views/VipForm";
import IndividualWorkEdit from "./Views/IndividualWorkEdit";
import IndividualWorkForm from "./Views/IndividualWorkForm";
import CandidatesView from "./Views/CandidatesView";
import JobHistory from "./Views/JobHistory";
import Applicant from "./Views/Applicant";
import NewEmployer from "./Views/adminViews/NewEmployer";
import AdminForm from "./Views/adminViews/AdminForm";
import ReportsView from "./Views/adminViews/ReportsView";
import JobsView from "./Views/adminViews/JobsView";
import ReportView from "./Views/adminViews/ReportView";
import EmployersViewAdmin from "./Views/adminViews/EmployersViewAdmin";
import UserView from "./Views/adminViews/UserView";
import EditUser from "./Views/EditUser";
import EmployeeOrderView from "./Views/EmployeeOrderView";
import AutomaticOrderForm from "./Views/AutomaticOrderForm.js";
import EmployerReviewForm from "./Views/EmployerReviewForm";
import IndividualWorkListViewAdmin from "./Views/adminViews/IndividualWorkListViewAdmin"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    VerifyToken(cookie.get("TOKEN"))
      .then((response) => {
        setIsLoggedIn(response.response);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <Router>
        <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="content">
          <Switch>
            <Route exact strict path="/">
              <Home />
            </Route>
            <Route path="/individualWorkList">
              <IndividualWorkListView />
            </Route>
            <Route path="/individualWork/:id">
              <IndividualWorkView />
            </Route>
            <Route path="/employees">
              <EmployeesView />
            </Route>
            <Route exact strict path="/job/:id">
              <Job />
            </Route>
            <Route path="/employeeOrder">
              <EmployeeOrderView />
            </Route>
            <Route path="/automaticOrder/:id">
              <AutomaticOrderForm />
            </Route>
            {isLoggedIn ? (
              <>
                <Route exact strict path="/individualWork/edit/:id">
                  <IndividualWorkView />
                </Route>
                <Route path="/employers">
                  <EmployersView flag={true} />
                </Route>
                <Route path="/admin">
                  <AdminView />
                </Route>
                <Route path="/userProfile">
                  <UserProfile />
                </Route>
                <Route exact strict path="/employeeReview/:userId/work/:workId">
                  <EmployeeReviewForm />
                </Route>
                <Route exact strict path="/job/edit/:id">
                  <JobForm />
                </Route>
                <Route exact strict path="/job/:id/candidates">
                  <CandidatesView flag={true} />
                </Route>
                <Route path="/newJob">
                  <JobForm />
                </Route>
                <Route path="/vipForm">
                  <VipForm />
                </Route>
                <Route path="/individualWorkEdit">
                  <IndividualWorkEdit />
                </Route>
                <Route path="/individualWorkForm">
                  <IndividualWorkForm />
                </Route>
                <Route path="/jobHistory">
                  <JobHistory />
                </Route>
                <Route path="/applicant">
                  <Applicant />
                </Route>
                <Route path="/newEmployer">
                  <NewEmployer />
                </Route>
                <Route path="/adminForm">
                  <AdminForm />
                </Route>
                <Route path="/reports">
                  <ReportsView />
                </Route>
                <Route path="/jobs">
                  <JobsView />
                </Route>
                <Route exact strict path="/report/:id">
                  <ReportView />
                </Route>
                <Route path="/employerAdmin">
                  <EmployersViewAdmin />
                </Route>
                <Route path="/individualWorkAdmin">
                  <IndividualWorkListViewAdmin />
                </Route>
                <Route path="/user">
                  <UserView />
                </Route>
                <Route path="/editUser">
                  <EditUser />
                </Route>
                <Route path="/employerReviewForm">
                  <EmployerReviewForm></EmployerReviewForm>
                </Route>
              </>
            ) : null}
            <Route>
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
