import React from 'react';
import ModuleList from './ModuleList';
import ModuleEditor from "./ModuleEditor";
import CourseServiceClient from "../services/CourseServiceClient";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styling/CourseEditorStyling.css';

export default class CourseEditor extends React.Component {
    constructor() {
        super();
        this.courseServiceClient = CourseServiceClient.instance;
        this.selectCourse = this.selectCourse.bind(this);
        this.state = {courseId: ''};
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }


    render() {
        return(
            <div className="wbdv-body">
                <header className="wbdv-course-editor-header">
                    <h3>Course {this.state.courseId}</h3>
                    <i id="wbdv-edit" className="fa-lg fa fa-pencil wbdv-edit"></i>
                </header>

                <aside className="col-4">
                    <ModuleList courseId={this.state.courseId}/>
                </aside>

                <div className="col-8 float-right">
                    <ModuleEditor/>
                </div>
            </div>
        );
    }
}