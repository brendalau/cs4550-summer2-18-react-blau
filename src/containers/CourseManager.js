import React from 'react';
import CourseList from './CourseList';
import 'react-table/react-table.css';
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
            <body className="container-fluid wbdv-course-manager">
                <div id="wbdv-course-manager-header">
                    <h1>Course Manager</h1>
                </div>
                {this.renderCourseList()}
            </body>
        );
    }
}