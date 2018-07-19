import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
// import '../../node_modules/popper.js';
// import '../../node_modules/bootstrap/js/src/bootstrap-confirmation.min';

export default class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item wbdv-module-list-item">
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.module.title}
                </Link>
                <i id="wbdv-remove"
                   className="fa-lg fa fa-times wbdv-remove"
                   onClick={() => {this.props.delete(this.props.module.id)}}></i>
            </li>
        );
    }
}