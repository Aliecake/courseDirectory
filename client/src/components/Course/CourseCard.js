import React, { Fragment } from 'react';


const CourseCard = props => {
    const { course } = props
    console.log(typeof course.materialsNeeded)
    return (
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
                                {course.materialsNeeded.split('\n').map((item, i) => {
                                    return <li key={i}>{item}</li>
                                })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CourseCard;