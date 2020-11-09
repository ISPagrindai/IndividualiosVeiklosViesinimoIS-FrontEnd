import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './Components/Navigation'
import EmployeesView from './Views/EmployeesView';
import EmployersView from './Views/EmployersView';
import IndividualWorkView from './Views/IndividualWorkView';
import AdminView from './Views/AdminView';
import Home from './Views/Home';
import Footer from './Components/Footer';
import UserProfile from './Views/UserProfile';
import Review from './Views/Review';
import Job from './Views/Job'
import JobForm from './Views/JobForm'
import VipForm from './Views/VipForm';
import IndividualWorkEdit from './Views/IndividualWorkEdit';
import IndividualWorkForm from './Views/IndividualWorkForm';
import CandidatesView from './Views/CandidatesView'
import JobHistory from './Views/JobHistory';
import Applicant from './Views/Applicant';
import NewEmployer from './Views/adminViews/NewEmployer';
import AdminForm from './Views/adminViews/AdminForm';
import ReportsView from './Views/adminViews/ReportsView';
import JobsView from './Views/adminViews/JobsView';
import ReportView from './Views/adminViews/ReportView';
import EmployersViewAdmin from './Views/adminViews/EmployersViewAdmin';
import UserView from './Views/adminViews/UserView';
import EditUser from './Views/EditUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="content">
        <Switch>
          <Route exact strict path="/">
            <Home />
          </Route>
          <Route path="/individualWork">
            <IndividualWorkView />
          </Route>
          <Route path="/employees">
            <EmployeesView />
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
          <Route path="/review">
            <Review />
          </Route>
          <Route exact strict path="/job/edit/:id">
            <Job Form />
          </Route>
          <Route exact strict path="/job/:id">
            <Job />
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
          <Route path="/user">  
            <UserView />
          </Route>
          <Route path="/editUser">  
            <EditUser/>
          </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;


