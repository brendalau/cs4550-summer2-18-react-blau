import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager';
import ModuleList from './containers/ModuleList';
import CourseEditor from './containers/CourseEditor';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ModuleListItem from "./components/ModuleListItem";

ReactDOM.render(
    <CourseEditor/>,
    document.getElementById('root')
);

