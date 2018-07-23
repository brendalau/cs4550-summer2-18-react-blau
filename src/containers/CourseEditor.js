import React from 'react';
import ModuleList from './ModuleList';
import ModuleEditor from "./ModuleEditor";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import CourseServiceClient from "../services/CourseServiceClient";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styling/CourseEditorStyling.css';

export default class CourseEditor extends React.Component {
    constructor() {
        super();
        this.state = {courseId: '', course: '', show: ''};
        this.courseServiceClient = CourseServiceClient.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.setCourse = this.setCourse.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        // this.updateCourse = this.updateCourse.bind(this);
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setCourse();
        this.setState({show: false});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setCourse() {
        this.courseServiceClient.findCourseById(this.state.courseId)
            .then((course) => {this.setState({course: course})});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleHide() {
        this.setState({show: false});
    }

    // updateCourse(event) {
    //     this.setState({courseId: event.target.value});
    //
    //     this.courseServiceClient.updateCourse(this.state.courseId, event.target.value)
    //         .then(this.render);
    // }

    render() {
        return(
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
                            // onChange={this.updateCourse}
                        />
                        <i className="fa-lg fa fa-check wbdv-update"></i>
                    </Modal.Body>
                </Modal>

                <div className="wbdv-body container-fluid">
                    <header className="wbdv-course-editor-header">
                        <h3>
                            {/*{this.courseServiceClient*/}
                                {/*.findCourseById(this.props.match.params.courseId).title}*/}
                                Course {this.state.course.title}
                        </h3>
                        <i className="fa-lg fa fa-pencil wbdv-edit" onClick={this.handleShow}></i>
                    </header>

                    <aside className="col-sm-4">
                        <ModuleList courseId={this.state.courseId}/>
                    </aside>

                    <Router>
                        <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}/>
                    </Router>
                </div>
            </div>
        );
    }
}