import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
 import About from '../pages/about';  // or whatever the location is
import Intro from '../components/intro'; // or whatever the location is

 let Routes = () => (
   <div>
    <Route exact path="/" component={Intro}/>
    <Route path="/about" component={About}/>
   </div>

 );

 export default Routes;
