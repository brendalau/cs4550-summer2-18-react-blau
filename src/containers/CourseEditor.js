import React from 'react';
import ModuleList from './ModuleList';
import ModuleEditor from "./ModuleEditor";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import CourseServiceClient from "../services/CourseServiceClient";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styling/CourseEditorStyling.css';

export default class CourseEditor extends React.Component {
    constructor() {
        super();
        this.state = {courseId: '', show: ''};
        this.courseServiceClient = CourseServiceClient.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setState({show: false});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleHide() {
        this.setState({show: false});
    }

    updateCourse(event) {
        this.setState({courseId: event.target.value});

        this.courseServiceClient.updateCourse(this.state)
    }

    render() {
        return(
            <div className="wbdv-body">
                <header className="wbdv-course-editor-header">
                    <h3>Course {this.props.match.params.courseId}</h3>
                    <i id="wbdv-edit"
                       className="fa-lg fa fa-pencil wbdv-edit"
                       onClick={this.handleShow}></i>
                </header>

                <aside className="col-4">
                    <ModuleList courseId={this.state.courseId}/>
                </aside>

                <Router>
                    <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}/>
                </Router>

                <div>
                    <Modal show={this.state.show}
                           onHide={this.handleHide}
                           animation={true}
                           bsSize="small">

                        <Modal.Header closeButton>
                            <Modal.Title>Update Course Title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <input id="wbdv-update-course-title-fld"
                                   className="form-control"
                                   placeholder={this.props.match.params.courseId}
                                   onChange={this.updateCourse}/>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={this.handleHide}>Yes, I'm sure</Button>
                            <Button bsStyle="primary"
                                    onClick={this.handleHide}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}