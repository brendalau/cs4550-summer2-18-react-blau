import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseServiceClient from "../services/CourseServiceClient";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class CourseList extends React.Component {
    constructor() {
        super();
        this.state = {course: {title: 'New Course Title'},
                      courses: []};
        this.courseServiceClient = CourseServiceClient.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.renderCourseRows = this.renderCourseRows.bind(this);
        this.findAllCourses = this.findAllCourses.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
    }

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses() {
        this.courseServiceClient.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }

    renderCourseRows() {
        let courses = this.state.courses.map((course) => {
            return <CourseRow course={course}
                              key={course.id}
                              delete={this.deleteCourse}
                              onClick={() => {this.updateCourse}}/>;
        });

        return courses;
    }

    titleChanged(event) {
        this.setState({course: {title: event.target.value}});
    }

    createCourse() {
        this.courseServiceClient.createCourse(this.state.course)
            .then(() => {this.findAllCourses();});
    }

    deleteCourse(courseId) {
        this.courseServiceClient.deleteCourse(courseId)
            .then(() => {this.findAllCourses();});
    }

    updateCourse(courseId, course) {
        this.courseServiceClient.updateCourse(courseId, course);
    }

    render() {
        return(
            <div>
                <header className="wbdv-course-manager-header">
                    <h3>Course Manager</h3>
                </header>

                <table border="0" className="wbdv-course-list">
                    <thead>
                        <tr className="wbdv-new-course-row">
                            <td colSpan="4">
                            <input id="wbdv-new-course-fld"
                                   className="form-control"
                                   placeholder="New Course Title"
                                   onChange={this.titleChanged}/>
                            </td>
                            <td>
                            <i className="fa-lg fa fa-plus wbdv-create"
                               onClick={this.createCourse}></i>
                            </td>
                        </tr>
                        <tr className="wbdv-course-header-row">
                            <td className="spaced">Title</td>
                            <td>Instructor</td>
                            <td>Date Modified</td>
                            <td>Date Created</td>
                            <td>&nbsp;</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}
