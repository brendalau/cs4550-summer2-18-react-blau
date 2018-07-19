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
        this.setCourseId = this.setCourseId.bind(this);
        this.setModules = this.setModules.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.renderModuleListItems = this.renderModuleListItems.bind(this);
        this.findAllModules = this.findAllModules.bind(this);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModules(modules) {
        this.setState({modules: modules});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.findAllModules();
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId);
    }

    findAllModules() {
        this.moduleServiceClient.findAllModules()
            .then((modules) => {
                this.setState({modules: modules});
            });
    }

    findAllModulesForCourse(courseId) {
        this.moduleServiceClient.findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    renderModuleListItems() {
        let modules = this.state.modules.map((module) => {
            return <ModuleListItem courseId={this.state.courseId}
                                   module={module}
                                   key={module.id}
                                   delete={this.deleteModule}/>;
        });

        return modules;
    }

    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    createModule() {
        this.moduleServiceClient.createModule(this.props.courseId, this.state.module)
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