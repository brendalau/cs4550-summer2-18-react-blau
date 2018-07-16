import React from 'react';
import LessonTab from '../components/LessonTab';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLessonTab() {
        return(
            <LessonTab/>
        );
    }

    render() {
        return(
            <ul className="nav nav-tabs">
                {this.renderLessonTab()}
            </ul>
        );
    }
}