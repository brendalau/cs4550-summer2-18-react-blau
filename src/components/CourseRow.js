import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {course: {modified: ''}};
    }

    updateModified() {
        this.setState({course: {modified: Date.now()}});
        this.props.onClick(this.props.course.id, this.state.course);
    }

    render() {
        return(
            <tr className="wbdv-course-row">
                <td className="wbdv-course-title spaced">
                    <i className="fa-lg fa fa-folder wbdv-folder"></i>
                    <Link to={`/course/${this.props.course.id}`}
                          onClick={() => {this.updateModified}}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td className="wbdv-instructor">
                    Me
                    </td>
                <td className="wbdv-date-modified">
                    {this.props.course.modified.substring(0, 10)}
                    </td>
                <td className="wbdv-date-created">
                    {this.props.course.created.substring(0, 10)}
                    </td>
                <td><i className="fa-lg fa fa-times wbdv-remove"
                       onClick={() => {this.props.delete(this.props.course.id)}}></i>
                </td>
            </tr>
        );
    }
}