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
            <div className="wbdv-course-list">
                <table border="0" className="wbdv-course-table">
                    <thead>
                        <tr className="wbdv-new-course-row">
                            <td colSpan="4">
                            <input id="newCourseFld"
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
            </div>
        );
    }
}
