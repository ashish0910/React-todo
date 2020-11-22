import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CreateTodo from './components/CreateTodo';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProfilePage from './components/ProfilePage'
import UserProvider from "./providers/UserProvider";

function App() {

  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path = '/' component={Dashboard} />
            <Route path = '/signin' component={SignIn} />
            <Route path = '/signup' component = {SignUp} />
            <Route path = '/newTodo' component = {CreateTodo} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
