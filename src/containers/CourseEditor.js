import React from 'react';
import ModuleList from './ModuleList';
import ModuleEditor from "./ModuleEditor";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import CourseServiceClient from "../services/CourseServiceClient";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styling/CourseEditorStyling.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {WidgetReducer} from "../reducers/WidgetReducer";
import WidgetListContainer from "./WidgetListContainer";

let store = createStore(WidgetReducer);

export default class CourseEditor extends React.Component {
    constructor() {
        super();
        this.state = {courseId: '', course: {title: ''}, show: ''};
        this.courseServiceClient = CourseServiceClient.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.setCourse = this.setCourse.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setCourse(this.props.match.params.courseId);
        this.handleHide();
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setCourse(courseId) {
        this.courseServiceClient.findCourseById(courseId)
            .then((course) => {this.setState({course: course})});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleHide() {
        this.setState({show: false});
    }

    titleChanged(event) {
        this.setState({course: {title: event.target.value}});
    }

    updateCourse() {
        this.courseServiceClient.updateCourse(this.props.match.params.courseId, this.state.course);
        this.handleHide();
    }

    render() {
        return(
            <Provider store={store}>
                <Router>
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
                                       placeholder={this.state.course.title}
                                       onChange={this.titleChanged}
                                />
                                <i className="fa-lg fa fa-check wbdv-update"
                                   onClick={this.updateCourse}></i>
                            </Modal.Body>
                        </Modal>

                        <div className="wbdv-body container-fluid">
                            <header className="wbdv-course-editor-header">
                                <h3>
                                        Editing: {this.state.course.title}
                                </h3>
                                <i className="fa-lg fa fa-pencil wbdv-edit"
                                   onClick={this.handleShow}></i>
                            </header>

                            <aside className="col-sm-4">
                                <ModuleList courseId={this.props.match.params.courseId}/>
                            </aside>

                            <Route path="/course/:courseId/module/:moduleId"
                                   component={ModuleEditor}/>

                            <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                                   component={WidgetListContainer}/>
                        </div>
                    </div>
                </Router>
        </Provider>
        );
    }
}