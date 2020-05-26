import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

export default class Courses extends Component {

    state = {
        courses: []
    }
    
    async componentDidMount() {
        const { context } = this.props
    
        const courses = await context.data.getCourses()
        if (courses) {
            this.setState({
                courses: courses.message
            })
        } else {
            console.log(`no courses found`)
        }


    }

    render() {
        
        return (
            <Fragment>
                {/* make into smaller card comp */}
                <div className="bounds">
                {this.state.courses.map((course, i) => {
                     return <div className="grid-33" key={i}>
                                <Link className="course--module course--link" to={`/courses/${course.id}`}>
                                    <h4 className="course--label">Course</h4>
                                    <h3 className="course--title">{course.title}</h3>
                                </Link>
                            </div>
                 })}  
                </div>  
                
            </Fragment>
        )
    }
}
