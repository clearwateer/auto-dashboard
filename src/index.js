import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Login from './login';
import Signup from './signup';

<<<<<<< HEAD
const routing = (
  <Router>
    <div>
      <Route exact path="" component={Login} />
      <Route exact path="login" component={Login} />
      {/* <Route path="/signup" component={Signup} /> */}
      <Route exact path={'signup'} component={Signup} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
=======
ReactDOM.render((
  <BrowserRouter>
     <Route path = "/" component = {Login} />
     <Route path = "login" component = {Login} />
     <Route path = "signup" component = {Signup} />
  </BrowserRouter>
), 
  document.getElementById('root')
);
>>>>>>> 0eeb0e5cf84b01ad1c98bfb144fe7315bbe7bf06
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
