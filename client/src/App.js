import React from "react";
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import homePage from './pages/HomePage/homepage'
import Signup from './pages/HomePage/auth/Signup';
import Login from './pages/HomePage/auth/Login';
import WebDesign from './pages/courses/WebDesign';
import WebDevelopment from './pages/courses/WebDevelopment';
import PhotoGraphy from './pages/courses/PhotoGraphy';
import Marketing from './pages/courses/Marketing';
import GraphicDesign from './pages/courses/GraphicDesign';
import FullStack from './pages/courses/FullStack';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={homePage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/courses/web-design' component={WebDesign} />
        <Route exact path='/courses/web-development' component={WebDevelopment} />
        <Route exact path='/courses/photography' component={PhotoGraphy} />
        <Route exact path='/courses/marketing' component={Marketing} />
        <Route exact path='/courses/graphic-design' component={GraphicDesign} />
        <Route exact path='/courses/full-stack' component={FullStack} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
