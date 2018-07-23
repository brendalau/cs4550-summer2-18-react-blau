import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class LessonTab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className={'nav-item'}>
                <NavLink className={'nav-item'}
                         to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                    {this.props.lesson.title}
                </NavLink>
                <i className="fa-lg fa fa-times wbdv-remove"
                   onClick={() => {this.props.delete(this.props.lesson.id)}}></i>
            </li>
        );
    }
}