import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.module.title}
                <i id="wbdv-remove"
                   className="fa-lg fa fa-times wbdv-remove"
                   onClick={() => {this.props.delete(this.props.module.id)}}></i>
            </li>
        );
    }
}