import React from 'react';
import LessonTab from '../components/LessonTab';
import LessonServiceClient from "../services/LessonServiceClient";
import { Modal } from 'react-bootstrap';
import Button from "react-bootstrap/es/Button";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId: '',
                      moduleId: '',
                      lessonIdToDelete: '',
                      newLesson: {title: "New Lesson Title"},
                      lessons: [],
                      showCreate: '',
                      showDelete: ''};
        this.lessonServiceClient = LessonServiceClient.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessons = this.setLessons.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.renderLessonTabs = this.renderLessonTabs.bind(this);
        this.findAllLessons = this.findAllLessons.bind(this);
        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.handleShowCreate = this.handleShowCreate.bind(this);
        this.handleHideCreate = this.handleHideCreate.bind(this);
        this.handleShowDelete = this.handleShowDelete.bind(this);
        this.handleHideDelete = this.handleHideDelete.bind(this);
    }

    handleShowCreate() {
        this.setState({showCreate: true});
    }

    handleHideCreate() {
        this.setState({showCreate: false});
    }

    handleShowDelete(lessonId) {
        this.setState({lessonIdToDelete: lessonId});
        this.setState({showDelete: true});
    }

    handleHideDelete() {
        this.setState({showDelete: false});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessons(lessons) {
        this.setState({lessons: lessons});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.findAllLessonsForModule();
    }

    componentWillReceiveProps(newProps){
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
    }

    findAllLessons() {
        this.lessonServiceClient.findAllLessons()
            .then((lessons) => {this.setLessons(lessons)});
    }

    findAllLessonsForModule() {
        this.lessonServiceClient.findAllLessonsForModule(this.props.courseId, this.props.moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }

    renderLessonTabs() {
        let lessons = this.state.lessons.map((lesson) => {
            return <LessonTab lesson={lesson}
                              key={lesson.id}
                              delete={this.handleShowDelete}
                              onClick={this.handleClick}
                              courseId={this.props.courseId}
                              moduleId={this.props.moduleId}/>;
        });

        return lessons;
    }

    titleChanged(event) {
        this.setState({newLesson: {title: event.target.value}});
    }

    createLesson() {
        this.lessonServiceClient.createLesson(this.props.courseId,
                                              this.props.moduleId,
                                              this.state.newLesson)
            .then(() => {this.findAllLessonsForModule(this.props.courseId, this.props.moduleId);

        this.handleHideCreate()});
    }

    deleteLesson(lessonId) {
        this.lessonServiceClient.deleteLesson(lessonId)
            .then(() => {this.findAllLessonsForModule(this.props.courseId, this.props.moduleId);

        this.handleHideDelete();});
    }

    render() {
        return(
            <div>
                <Modal show={this.state.showCreate}
                       onHide={this.handleHideCreate}
                       animation={true}
                       bsSize="small">

                <Modal.Header closeButton>
                    <Modal.Title>Create New Lesson</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input id="wbdv-new-lesson-title-fld"
                           className="form-control"
                           placeholder="New Lesson Title"
                           onChange={this.titleChanged}/>
                    <i className="fa-lg fa fa-plus wbdv-create"
                       onClick={this.createLesson}></i>
                </Modal.Body>
                </Modal>

                <Modal show={this.state.showDelete}
                       onHide={this.handleHideDelete}
                       animation={true}
                       bsSize="small">

                    <Modal.Header>
                        <Modal.Title>Are you sure you want to delete this lesson?</Modal.Title>
                    </Modal.Header>

                    <Modal.Footer>
                        <Button onClick={this.handleHideDelete}>No</Button>
                        <Button bsStyle="primary"
                                onClick={() => this.deleteLesson(this.state.lessonIdToDelete)}>
                            Yes, I'm sure
                        </Button>
                    </Modal.Footer>
                </Modal>

                <ul className="nav nav-tabs">
                    {this.renderLessonTabs()}

                    <li className="wbdv-new-lesson">
                        <i className="fa-lg fa fa-plus wbdv-create float-right"
                           onClick={this.handleShowCreate}></i>
                    </li>
                </ul>
            </div>
        );
    }
}