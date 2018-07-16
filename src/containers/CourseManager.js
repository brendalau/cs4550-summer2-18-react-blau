import React from 'react';
import CourseList from './CourseList';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styling/CourseManagerStyling.css';


export default class CourseManager extends React.Component {
    constructor() {
        super();
    }

    renderCourseList() {
        return(
            <CourseList/>
        );
    }

    render() {
        return(
            <div>
                <header class="wbdv-course-manager-header">
                    <h3>Course Manager</h3>
                </header>

                <body className="container-fluid wbdv-course-manager-body">
                    {this.renderCourseList()}
                </body>
            </div>
        );
    }
}