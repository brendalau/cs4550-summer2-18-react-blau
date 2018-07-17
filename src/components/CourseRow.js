import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr className="wbdv-course-row">
                <td className="wbdv-course-title spaced">
                    <Link to={`/course/${this.props.course.id}`}>
                        <i className="fa-lg fa fa-folder wbdv-folder"></i>{this.props.course.title}
                    </Link>
                </td>
                <td className="wbdv-instructor">{this.props.course.instructor}</td>
                <td className="wbdv-date-last-mod">{this.props.course.modified.substring(0, 10)}</td>
                <td className="wbdv-time-last-mod">{this.props.course.created.substring(0, 10)}</td>
                <td><i id="wbdv-remove"
                       className="fa-lg fa fa-times wbdv-remove"
                       onClick={() => {this.props.delete(this.props.course.id)}}></i>
                </td>
            </tr>
        );
    }
}