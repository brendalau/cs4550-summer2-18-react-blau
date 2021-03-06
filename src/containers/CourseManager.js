import React from 'react';
import CourseList from './CourseList';
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styling/CourseManagerStyling.css';

export default class CourseManager extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Router>
                <div>
                    <Route path="/courses"
                           component={CourseList}>
                    </Route>

                    <Route path="/course/:courseId"
                           component={CourseEditor}>
                    </Route>
                </div>
            </Router>
        );
    }
}