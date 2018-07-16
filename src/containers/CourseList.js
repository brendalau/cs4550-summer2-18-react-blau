import React from 'react';
import CourseRow from "../components/CourseRow";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseList extends React.Component {
    constructor() {
        super();
    }

    renderCourseRows() {
        return(
            <CourseRow/>
        );
    }

    render() {
        return(
            <table border="0" className="wbdv-course-list">
                <thead>
                    <tr className="wbdv-new-course-row">
                        <td colSpan="4">
                        <input id="wbdv-new-course-fld"
                               className="form-control"
                               placeholder="New Course Title"/>
                        </td>
                        <td>
                        <i className="fa-lg fa fa-plus wbdv-create"></i>
                        </td>
                    </tr>
                    <tr className="wbdv-course-header-row">
                        <td className="spaced">Title</td>
                        <td>Instructor</td>
                        <td>Date Last Mod.</td>
                        <td>Time Last Mod.</td>
                        <td>&nbsp;</td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderCourseRows()}
                    {this.renderCourseRows()}
                    {this.renderCourseRows()}
                </tbody>
            </table>
        );
    }
}
