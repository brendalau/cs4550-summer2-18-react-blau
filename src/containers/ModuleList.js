import React from 'react';
import ModuleListItem from "../components/ModuleListItem";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import ModuleServiceClient from "../services/ModuleServiceClient";

export default class ModuleList extends React.Component {
    constructor() {
        super();
        this.state = {courseId: '', module: {title: 'New Module Title'}, modules: []};
        this.moduleServiceClient = ModuleServiceClient.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.renderModuleListItems = this.renderModuleListItems.bind(this);
        this.findAllModules = this.findAllModules.bind(this);
    }

    componentDidMount() {
        this.findAllModules();
    }

    findAllModules() {
        this.moduleServiceClient.findAllModules()
            .then((modules) => {
                this.setState({modules: modules});
            });
    }

    renderModuleListItems() {
        let modules = this.state.modules.map((module) => {
            return <ModuleListItem module={module} key={module.id} delete={this.deleteModule}/>;
        });

        return modules;
    }

    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    createModule() {
        this.moduleServiceClient.createModule(this.state.courseId, this.state.module)
            .then(() => {this.findAllModules();});
    }

    deleteModule(moduleId) {
        this.moduleServiceClient.deleteModule(moduleId)
            .then(() => {this.findAllModules();});
    }

    render() {
        return(
            <ul className="wbdv-module-list">
                <li className="wbdv-new-module list-group-item">
                    <input id="wbdv-new-module-fld"
                           className="form-control"
                           placeholder="New Module Name"
                           onChange={this.titleChanged}/>
                    <i className="fa-lg fa fa-plus wbdv-create float-right"
                       onClick={this.createModule}></i>
                </li>
                {this.renderModuleListItems()}
            </ul>
        );
    }
}