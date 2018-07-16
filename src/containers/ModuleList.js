import React from 'react';
import ModuleListItem from "../components/ModuleListItem";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class ModuleList extends React.Component {
    constructor() {
        super();
    }

    renderModuleListItem() {
        return(
            <ModuleListItem/>
        );
    }

    render() {
        return(
            <ul className="wbdv-module-list">
                <li className="wbdv-new-module list-group-item">
                    <input id="wbdv-new-module-fld"
                           className="form-control"
                           placeholder="New Module Name"/>
                    <i className="fa-lg fa fa-plus wbdv-create float-right"></i>
                </li>
                {this.renderModuleListItem()}
                {this.renderModuleListItem()}
                {this.renderModuleListItem()}
            </ul>
        );
    }
}