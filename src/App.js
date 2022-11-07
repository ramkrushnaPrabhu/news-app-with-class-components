
// import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//Always Remember first letter of  filename of componants or other js files is capital like News,Spinner,App etc.

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
          <Route exact path="/" element={<News key="general" pageSize={9} country="in" category="general" />}/>
          <Route exact path="/Business" element={<News key="business" pageSize={9} country="in" category="business" />}/>
          <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" />}/>
          <Route exact path="/Health" element={<News key="health" pageSize={9} country="in" category="health" />}/>
          <Route exact path="/Science" element={<News key="science" pageSize={9} country="in" category="science" />}/>
          <Route exact path="/Technology" element={<News key="technology" pageSize={9} country="in" category="technology" />}/>
                </Routes>
              </Router>
            </>
            )
  }
}
