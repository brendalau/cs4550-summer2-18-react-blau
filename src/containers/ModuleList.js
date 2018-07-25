import React from 'react';
import ModuleListItem from "../components/ModuleListItem";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import ModuleServiceClient from "../services/ModuleServiceClient";
import Modal from "react-bootstrap/es/Modal";
import Button from "react-bootstrap/es/Button";

export default class ModuleList extends React.Component {
    constructor() {
        super();
        this.state = {courseId: '',
                      module: {title: 'New Module Title'},
                      modules: [],
                      moduleIdToDelete: '',
                      showDelete: ''};
        this.moduleServiceClient = ModuleServiceClient.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.setModules = this.setModules.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.renderModuleListItems = this.renderModuleListItems.bind(this);
        this.findAllModules = this.findAllModules.bind(this);
        this.handleShowDelete = this.handleShowDelete.bind(this);
        this.handleHideDelete = this.handleHideDelete.bind(this);
    }

    handleShowDelete(moduleId) {
        this.setState({moduleIdToDelete: moduleId});
        this.setState({showDelete: true});
    }

    handleHideDelete() {
        this.setState({showDelete: false});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModules(modules) {
        this.setState({modules: modules});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.findAllModulesForCourse(this.props.courseId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId);
    }

    findAllModules() {
        this.moduleServiceClient.findAllModules()
            .then((modules) => {this.setState({modules: modules})});
    }

    findAllModulesForCourse(courseId) {
        this.moduleServiceClient.findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    renderModuleListItems() {
        let modules = this.state.modules.map((module) => {
            return <ModuleListItem courseId={this.state.courseId}
                                   key={module.id}
                                   module={module}
                                   delete={this.handleShowDelete}/>;
        });

        return modules;
    }

    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    createModule() {
        this.moduleServiceClient.createModule(this.props.courseId, this.state.module)
            .then(() => {this.findAllModulesForCourse(this.props.courseId);});
    }

    deleteModule(moduleId) {
        this.moduleServiceClient.deleteModule(moduleId)
            .then(() => {this.findAllModulesForCourse(this.props.courseId);});

        this.handleHideDelete()
    }

    render() {
        return(
            <div>
                <Modal show={this.state.showDelete}
                       onHide={this.handleHideDelete}
                       animation={true}
                       bsSize="small">

                    <Modal.Header>
                        <Modal.Title>Are you sure you want to delete this module?</Modal.Title>
                    </Modal.Header>

                    <Modal.Footer>
                        <Button onClick={this.handleHideDelete}>No</Button>
                        <Button bsStyle="primary"
                                onClick={() => this.deleteModule(this.state.moduleIdToDelete)}>
                            Yes, I'm sure
                        </Button>
                    </Modal.Footer>
                </Modal>

                <ul className="wbdv-module-list">
                    <li className="wbdv-new-module list-group-item">
                        <input id="wbdv-new-module-fld"
                               className="form-control"
                               placeholder="New Module Name"
                               onChange={this.titleChanged}/>
                        <i className="fa-lg fa fa-plus wbdv-create"
                           onClick={this.createModule}></i>
                    </li>
                    {this.renderModuleListItems()}
                </ul>
            </div>
        );
    }
}