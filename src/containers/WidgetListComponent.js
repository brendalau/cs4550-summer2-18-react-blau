import React from 'react';
import {HeadingWidget} from "../components/widgets/HeadingWidget";
import {ParagraphWidget} from "../components/widgets/ParagraphWidget";
import '../styling/WidgetListStyling.css';
import {ListWidget} from "../components/widgets/ListWidget";
import {ImageWidget} from "../components/widgets/ImageWidget";
import {LinkWidget} from "../components/widgets/LinkWidget";
import {Modal} from "react-bootstrap";

export default class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props)
        let newWidgetTypeSel;
        this.props.findWidgetsByLesson(this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.lessonId !== newProps.match.params.lessonId)
            newProps.findWidgetsByLesson(newProps.match.params.lessonId);
    }

    render() {
        return(
            <div className="row col-sm-8">
                <Modal show={this.props.createModal}
                       onHide={this.props.hideCreateModal}
                       animation={true}
                       bsSize="small">

                    <Modal.Header closeButton>
                        <Modal.Title>Create New Widget</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <select ref={node => this.newWidgetTypeSel = node}
                                id="wbdv-new-widget-type"
                                className="form-control wbdv-type-dropdown"
                                defaultValue="HEADING">
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="LIST">List</option>
                            <option value="IMAGE">Image</option>
                            <option value="LINK">Link</option>
                        </select>
                        <i className="fa-lg fa fa-plus wbdv-create"
                           onClick={() => {
                               let w = {
                                   id: (new Date()).getMilliseconds(),
                                   type: this.newWidgetTypeSel.value
                               };
                               this.props.createWidget(this.props.match.params.lessonId, w)
                               this.props.hideCreateModal()
                           }}></i>
                    </Modal.Body>
                </Modal>

                <div className="wbdv-widget-controls">
                    <b className="wbdv-create-new"
                       onClick={() => this.props.showCreateModal()}>Create New</b>
                    <span>
                    <b>Preview</b>
                    <label className="wbdv-preview-switch">
                      <input type="checkbox"
                             onClick={() => {this.props.togglePreviewMode()}}/>
                      <span className="wbdv-preview-slider"></span>
                    </label>
                    <b className="wbdv-save"
                       onClick={() => this.props.saveWidgets(this.props.match.params.lessonId)}>Save</b>
                </span>
                </div>
                <div className="row wbdv-widget-list">
                    <ul className="list-group">
                        {this.props.widgets.map((widget, index) =>
                             <li className="list-group-item" key={index}>
                                 <div>
                                     {widget.type === 'HEADING'
                                      && <HeadingWidget widget={widget}
                                                        numWidgets={this.props.widgets.length}
                                                        position={this.props.widgets.indexOf(widget)}
                                                        deleteWidget={this.props.deleteWidget}
                                                        updateWidget={this.props.updateWidget}
                                                        previewMode={this.props.previewMode}
                                                        moveUp={this.props.moveUp}
                                                        moveDown={this.props.moveDown}/>}
                                     {widget.type === 'PARAGRAPH'
                                      && <ParagraphWidget widget={widget}
                                                          numWidgets={this.props.widgets.length}
                                                          position={this.props.widgets.indexOf(widget)}
                                                          deleteWidget={this.props.deleteWidget}
                                                          updateWidget={this.props.updateWidget}
                                                          previewMode={this.props.previewMode}
                                                          moveUp={this.props.moveUp}
                                                          moveDown={this.props.moveDown}/>}
                                     {widget.type === 'LIST'
                                      && <ListWidget widget={widget}
                                                     numWidgets={this.props.widgets.length}
                                                     position={this.props.widgets.indexOf(widget)}
                                                     deleteWidget={this.props.deleteWidget}
                                                     updateWidget={this.props.updateWidget}
                                                     previewMode={this.props.previewMode}
                                                     moveUp={this.props.moveUp}
                                                     moveDown={this.props.moveDown}/>}
                                     {widget.type === 'IMAGE'
                                      && <ImageWidget widget={widget}
                                                      numWidgets={this.props.widgets.length}
                                                      position={this.props.widgets.indexOf(widget)}
                                                      deleteWidget={this.props.deleteWidget}
                                                      updateWidget={this.props.updateWidget}
                                                      previewMode={this.props.previewMode}
                                                      moveUp={this.props.moveUp}
                                                      moveDown={this.props.moveDown}/>}
                                     {widget.type === 'LINK'
                                      && <LinkWidget widget={widget}
                                                     numWidgets={this.props.widgets.length}
                                                     position={this.props.widgets.indexOf(widget)}
                                                     deleteWidget={this.props.deleteWidget}
                                                     updateWidget={this.props.updateWidget}
                                                     previewMode={this.props.previewMode}
                                                     moveUp={this.props.moveUp}
                                                     moveDown={this.props.moveDown}/>}
                                 </div>
                             </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}