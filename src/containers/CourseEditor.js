import React from 'react';
import ModuleList from './ModuleList';
import ModuleEditor from "./ModuleEditor";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styling/CourseEditorStyling.css';

export default class CourseEditor extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <header className="wbdv-course-editor-header">
                    <h3>Course Editor</h3>
                </header>

                <aside className="col-4">
                    <ModuleList/>
                </aside>

                <body className="wbdv-course-editor-body col-8 float-right">
                    <ModuleEditor/>
                </body>
            </div>
        );
    }
}