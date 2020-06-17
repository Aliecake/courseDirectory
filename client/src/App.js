import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.css';
import Header from './components/Header';
import Courses from './components/Course/Courses';
import CourseDetail from './components/Course/CourseDetail';
import NotFound from './components/NotFound';
import withContext from './Context';
import UserSignUp from './components/User/UserSignUp';
import UserSignIn from './components/User/UserSignIn';
import UserSignOut from './components/User/UserSignOut';
import CreateCourse from './components/Course/CreateCourse';


const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const CreateCourseWithContext = withContext(CreateCourse)

export default () => (
  <Router>
    <div>
      <HeaderWithContext />
      <Switch>
        <Route exact path="/" component={CoursesWithContext} />
        <Route path="/courses/:id" component={CourseDetailWithContext} />
        <Route path="/create-course" component={CreateCourseWithContext} />

        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />


      
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);
