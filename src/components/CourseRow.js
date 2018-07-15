import React from 'react';
// import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <tr className="wbdv-course-row">
                <td className="wbdv-course-title spaced">
                    <i className="fa-lg fa fa-folder wbdv-folder"></i>CS4550 Web Development
                </td>
                <td className="wbdv-owned-by">Me</td>
                <td className="wbdv-last-mod-date">Jul 12, 2018</td>
                <td className="wbdv-last-mod-time">6:45pm</td>
                <td><i id="wbdv-remove" className="fa-lg fa fa-times wbdv-remove"></i></td>
            </tr>
        );
    }
}