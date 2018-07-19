import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class LessonTab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="nav-item active">
                <a className="nav-link active" href="#">{this.props.lesson.title}</a>
                <i id="wbdv-edit" className="fa-lg fa fa-pencil wbdv-edit"></i>
            </li>
        );
    }
}