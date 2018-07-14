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
            <div className="container-fluid">
                <h1>Course Manager</h1>
                {this.renderCourseList()}
            </div>
        );
    }
}