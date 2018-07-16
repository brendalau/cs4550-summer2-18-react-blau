import React from 'react';
import LessonTabs from "../containers/LessonTabs";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class ModuleEditor extends React.Component {
    constructor() {
        super();
    }

    renderLessonTabs() {
        return(
            <LessonTabs/>
        );
    }

    render() {
        return(
            <div>
                {this.renderLessonTabs()}
            </div>
        );
    }
}