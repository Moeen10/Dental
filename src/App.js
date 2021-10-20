import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import NotFound from './components/404/NotFound';
import Doctor from './components/Doctor/Doctor';
import Login from './components/Login/Login';
import Footer from './Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute';
import SingleService from './components/Services/SingleService';
import SignIn from './components/Login/SignIn';
function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header/>

      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path="/home">
      <Home/>
      </Route>
    
      <Route exact path="/services">
      <Services/>
      </Route>
      <PrivateRoute path="/singleService/:serviceId">
      <SingleService></SingleService>
      </PrivateRoute>
      <PrivateRoute exact path="/doctor">
      <Doctor/>
      </PrivateRoute>
      <Route exact path="/login">
      <Login/>
      </Route>
      <Route path="/signin">
              <SignIn></SignIn>
            </Route>
      <Route path="*">
      <NotFound></NotFound>
      </Route>
      </Switch>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer/>
      </BrowserRouter>
     </AuthProvider>

      
    </div>
  );
}

export default App;
