import React from 'react';
import ModuleList from './ModuleList';
import ModuleEditor from "./ModuleEditor";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styling/CourseEditorStyling.css';

export default class CourseEditor extends React.Component {
    constructor() {
        super();
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
                </header>

                <aside className="col-4">
                    <ModuleList/>
                </aside>

                <div className="col-8 float-right">
                    <ModuleEditor/>
                </div>
            </div>
        );
    }
}