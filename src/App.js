
import './App.css';
import CreateStudent from './Pages/CreateStudent';
import CreateTutor from './Pages/CreateTutor';
import ForgotPass from './Pages/ForgotPass';
import Landing from './Pages/Landing';
import LogIn from './Pages/LogIn';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Landing}></Route>
          <Route path='/login' component={LogIn}></Route>
          <Route path='/forget' component={ForgotPass}></Route>
          <Route path='/studentaccount' component={CreateStudent}></Route>
          <Route path='/tutoraccount' component={CreateTutor}></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
