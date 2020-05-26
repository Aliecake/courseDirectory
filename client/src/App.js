import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './styles/App.css';
import Header from './components/Header'
import Courses from './components/Course/Courses'
import CourseDetail from './components/Course/CourseDetail'
import NotFound from './components/NotFound'
import withContext from './Context';

const HeaderWithContext = withContext(Header)
const CoursesWithContext = withContext(Courses)
const CourseDetailWithContext = withContext(CourseDetail)


export default () => (
  <Router>
    <div>
      <HeaderWithContext />
      <Switch>
        <Route exact path="/" component={ CoursesWithContext } />
        <Route path="/courses/:id" component={ CourseDetailWithContext }/>
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  </Router>
);

