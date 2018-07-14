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
            <div>
                <table border="0">
                    <thead>
                        <tr>
                            <th colSpan="5">New Course Title</th>
                        </tr>
                        <tr id="newCourseTitleFldRow">
                            <td colSpan="4">
                            <input id="newCourseTitleFld"
                                   className="form-control"
                                   placeholder="New Course Title"/>
                            </td>
                            <td>
                            <i className="fa-2x fa fa-plus wbdv-create"></i>
                            </td>
                        </tr>
                        <tr>
                            <th className="spaced">Title</th>
                            <th>Owned By</th>
                            <th>Date Last Mod.</th>
                            <th>Time Last Mod.</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}
