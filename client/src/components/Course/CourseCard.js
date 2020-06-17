import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import ErrorsDisplay from '../ErrorsDisplay';

export default class CourseCard extends Component {

  state = {
    errors: []
  }

  render() {
    const { course } = this.props;
    const { context } = this.props.context;

    let user;
    //without the if, a CORs origin error happens upon a guest viewing the course card.
    if (Cookies.get('authenticatedUser')) {
      user = JSON.parse(Cookies.get('authenticatedUser'))
    }

    return (
      <Fragment>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid 100">
              {/* Uses cookies instead of context, so will delete on reload */}
              <span>
                {/* check if there is an auth user, and if so make sure they match whom added course*/}
                {context.authenticatedUser && context.authenticatedUser.id === course.addedBy.id ? (
                  <Fragment>
                    <Link className="button" to={`/courses/${course.id}/update`}>
                      Update Course
                    </Link>

                    <button
                      className="button"
                      onClick={() =>
                        context.data.handleDelete(
                          course.id,
                          user.user.emailAddress,
                          user.user.password
                        )
                        .then(errors => {
                          if (errors){
                            this.setState({
                              errors: errors
                            })
                          } else {
                            this.props.context.history.push('/')
                          }
                        })
                      }
                    >
                      {' '}
                      Delete Course
                    </button>
                    <Link className="button" to="/">
                      Return to List
                    </Link>
                    {/* added redundant display of validation errors */}
                    <ErrorsDisplay errors={this.state.errors} />
                  </Fragment>
                ) : (
                  <Fragment>
                    <Link className="button" to="/">
                      Return to List
                    </Link>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{course.title}</h3>
              <p>
                added by {course.addedBy.firstName} {course.addedBy.lastName}
              </p>
            </div>
            <div className="course--description">{course.description}</div>
          </div>
          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated time</h4>
                  <h3 className="course--time--input">{course.estimatedTime}</h3>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials needed</h4>
                  <ul>
                    {/* remove first asterisk, and replace all other trailing newline asterisks if there are any */}
                    {course.materialsNeeded
                      ? course.materialsNeeded
                          .replace("*", "")
                          .replace(/\n\*/g, ",")
                          .split(',')
                          .map((item, i) => <li key={i}>{item}</li>)
                      : ''}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
