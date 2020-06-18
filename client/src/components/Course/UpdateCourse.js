import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Form from '../Form';

export default class UpdateCourse extends Component {
  state = {
    errors: [],
  };

  render() {
    const { errors } = this.state;
    let course;
    // define course and check if state is available prevents undefined errors before redirect
    if(this.props.location.state) {
      course = this.props.location.state.course
    }

    return (
      <Fragment>
        {/* if state exists, load the form. If not forward to not found */}
        {this.props.location.state? (
          <div className="bounds course--detail">
        
          <h1>Update Course</h1>
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Update Course"
            elements={() => (
              <Fragment>
                <div className="grid-66">
                  <div className="course--header">
                    <h4 className="course--label">Course</h4>
                    <div>
                      <input
                        className="input-title course--title--input"
                        id="title"
                        name="title"
                        type="text"
                        value={course.title || ''}
                        onChange={this.change}
                      />
                    </div>
                    <p>By username</p>
                  </div>
                  <div className="course--description">
                    <textarea
                      id="description"
                      name="description"
                      type="text"
                      className=""
                      value={course.description}
                      onChange={this.change}
                    />
                  </div>
                </div>
                <div className="grid-25 grid-right">
                  <div className="course--stats">
                    <ul className="course--stats--list">
                      <li className="course--stats--list--item">
                        {/* OR statement on time & materials allows there to be some prompt in the inputs */}
                        <h4>Estimated Time</h4>
                        <input
                          id="estimatedTime"
                          name="estimatedTime"
                          className="course--time--input"
                          type="text"
                          value={course.estimatedTime || 'Hours'}
                          onChange={this.change}
                        />
                      </li>
                      <li className="course--stats--list--item">
                        <h4>Materials Needed</h4>
                        <textarea
                          id="materialsNeeded"
                          name="materialsNeeded"
                          type="text"
                          className=""
                          value={course.materialsNeeded || 'Materials Needed'}
                          onChange={this.change}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
               
              </Fragment>
            )}
          />
          <p>&nbsp;</p>
          <p>
            Only members can add courses... <Link to="/signin">Click here</Link> to
            sign in or <Link to="/signup">Sign up</Link>
          </p>
        </div>
        ) : (
          <Redirect to="/notfound" />
        )}
      </Fragment>
      
    );
  }

  change = e => {
    const { name } = e.target;
    const { value } = e.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  submit = () => {
    const { context } = this.props;
    const { title, description, materialsNeeded, estimatedTime } = this.state;
    const { from } = this.props.location.state || {from: {pathname: '/'}}

    // user payload
    const course = {
      title,
      description,
      materialsNeeded,
      estimatedTime,
    };

    context.data
      .updateCourse(course)
      .then(errors => {
        if (errors) {
          this.setState({
            errors
          });
          console.log(this.state.errors)
        } else {
          console.log(this.props)
          this.props.history.push(from);
        }
      })
      .catch(err => {
        console.log(`catch block in create`, err)
      })
  };

  cancel = () => {
    this.props.history.push('/');
  };
}
