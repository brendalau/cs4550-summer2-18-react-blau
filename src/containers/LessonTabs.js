import React from 'react';
import LessonTab from '../components/LessonTab';
import LessonServiceClient from "../services/LessonServiceClient";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId: '', moduleId: '', lesson: {title: 'New Lesson Title'}, lessons: []};
        this.lessonServiceClient = LessonServiceClient.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessons = this.setLessons.bind(this);
        // this.titleChanged = this.titleChanged.bind(this);
        // this.createLesson = this.createLesson.bind(this);
        // this.deleteLesson = this.deleteLesson.bind(this);
        this.renderLessonTabs = this.renderLessonTabs.bind(this);
        this.findAllLessons = this.findAllLessons.bind(this);
        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
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
            return <LessonTab lesson={lesson} key={lesson.id} delete={this.deleteLesson}/>;
        });

        return lessons;
    }

    // titleChanged(event) {
    //     this.setState({lesson: {title: event.target.value}});
    // }

    // createLesson() {
    //     this.lessonServiceClient.createLesson(this.props.courseId,
    //                                           this.props.moduleId,
    //                                           this.state.lesson)
    //         .then(() => {this.findAllLessons();});
    // }
    //
    // deleteLesson(lessonId) {
    //     this.lessonServiceClient.deleteLesson(lessonId)
    //         .then(() => {this.findAllLessons();});
    // }

    render() {
        return(
            <ul className="nav nav-tabs">
                {this.renderLessonTabs()}

                <li className="wbdv-new-lesson">
                    <i className="fa-lg fa fa-plus wbdv-create float-right"
                       onClick={this.createLesson}></i>
                </li>
            </ul>
        );
    }
}