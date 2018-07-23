import React from 'react';
import LessonTabs from "../containers/LessonTabs";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class ModuleEditor extends React.Component {
    constructor() {
        super();
        this.state = {courseId: '', moduleId: ''};
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.renderLessonTabs = this.renderLessonTabs.bind(this);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
    }

    renderLessonTabs() {
        return(
            <LessonTabs courseId={this.props.match.params.courseId}
                        moduleId={this.props.match.params.moduleId}/>
        );
    }

    render() {
        return(
            <div className="col-sm-8">
                {this.renderLessonTabs()}
            </div>
        );
    }
}