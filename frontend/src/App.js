import React from 'react';
import {
	BrowserRouter as Router,
	// Redirect,
	Route,
	Switch,
} from 'react-router-dom';

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import DefaultContainer from './Containers/FrontPage/DefaultContainer';
import Signup from './Components/Layouts/Backend/Login/Signup';

function App() {
  return (
    <React.Fragment>
        {/* <MainNavigation />
          <PageLayout> */}
          <Router>
              <Switch>
                <Route exact path="/" component={DefaultContainer} />
                <Route exact path="/signup" component={Signup} />
                {/* <Route exact path="/dashboard" component={Dashboard} />
                <Route path="/profile" component={ProfileServiceContainer} /> */}
              </Switch>
          </Router>
        {/* </PageLayout> */}
    </React.Fragment>
  );
}

export default App;
