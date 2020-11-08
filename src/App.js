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
            <EmployersView />
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
        </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;


