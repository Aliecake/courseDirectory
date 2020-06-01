import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';



export default class CourseCard extends Component {

    render() {
        const course = this.props.course
        const { context } = this.props.context
 
        return (
            <Fragment>
                <div className="actions--bar">
                <div className="bounds">
                    <div className="grid 100">
                        <span>
                            {/* update and delete for auth user only */}
                            <Link className="button" to="/update-course">Update Course</Link>
                            <button className="button" onClick={() => context.data.handleDelete(course.id)}>Delete Course</button>
                            <Link className="button" to="/">Return to List</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bounds course--detail">
                <div className="grid-66">
                    <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <h3 className="course--title">{course.title}</h3>
                        <p>added by username</p>
                    </div>
                    <div className="course--description">
                        {course.description}
                    </div>
                </div>
                <div className="grid-25 grid-right">
                    <div className="course--stats">
                        <ul className="course--stats-list">
                            <li className="course--stats--list--item">
                                <h4>Estimated time</h4>
                                <h3>{course.estimatedTime}</h3>
                            </li>
                            <li className="course--stats--list--item">
                                <h4>Materials needed</h4>
                                <ul>
                                    {course.materialsNeeded ? course.materialsNeeded.split('\n').map((item, i) => {
                                        return <li key={i}>{item}</li> 
                                    }) : '' } 
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
    
            </div>
            </Fragment>
            
        )
    }
}
