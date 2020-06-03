import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './styles/App.css';
import Header from './components/Header';
import Courses from './components/Course/Courses';
import CourseDetail from './components/Course/CourseDetail';
import NotFound from './components/NotFound';
import withContext from './Context';
import UserSignUp from './components/User/UserSignUp';
import UserSignIn from './components/User/UserSignIn';
import Authenticated from './components/User/Authenticated'

const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const CoursesWithContext = withContext(Courses);
const AuthenticatedWithContext = withContext(Authenticated)
const CourseDetailWithContext = withContext(CourseDetail);


export default () => (
  <Router>
    <div>
      <HeaderWithContext />
      <Switch>
        <Route exact path="/" component={ CoursesWithContext } />
        <Route path="/courses/:id" component={ CourseDetailWithContext }/>

        <Route path="/signup" component={ UserSignUpWithContext }/>
        <Route path="/signin" component={ UserSignInWithContext }/>

        <Route path="/authenticated" component={ AuthenticatedWithContext }/>
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  </Router>
);

