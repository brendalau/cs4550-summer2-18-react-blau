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
                Module 1 - jQuery
                <i id="wbdv-remove" className="fa-lg fa fa-times wbdv-remove"></i>
            </li>
        );
    }
}