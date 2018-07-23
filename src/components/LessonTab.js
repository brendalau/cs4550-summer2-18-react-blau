import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class LessonTab extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.lesson);
    }

    render() {
        return(
            <li className={'nav-item ' + this.props.isActive}>
                <a className={'nav-link ' + this.props.isActive ? 'active' : ''}
                   href="#"
                   onClick={this.handleClick}>
                    {this.props.lesson.title}
                </a>
                <i className="fa-lg fa fa-times wbdv-remove"
                   onClick={() => {this.props.delete(this.props.lesson.id)}}></i>
            </li>
        );
    }
}