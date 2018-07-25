import React from 'react';
import {HeadingWidget} from "../components/widgets/HeadingWidget";
import {ParagraphWidget} from "../components/widgets/ParagraphWidget";
import '../styling/WidgetListStyling.css';
import {ListWidget} from "../components/widgets/ListWidget";
import {ImageWidget} from "../components/widgets/ImageWidget";
import {LinkWidget} from "../components/widgets/LinkWidget";
import {Modal} from "react-bootstrap";


const WidgetListComponent = ({widgets, deleteWidget, createWidget, createModal, showCreateModal, hideCreateModal}) =>
{
    let widgetTitle;
    let widgetType;
    // var newWidgetTypeSel = document.getElementById('wbdv-new-widget-type');


    return(
        <div className="row col-sm-8">
            <Modal show={createModal}
                   onHide={hideCreateModal}
                   animation={true}
                   bsSize="small">

                <Modal.Header closeButton>
                    <Modal.Title>Create New Widget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select id="wbdv-new-widget-type" className="form-control wbdv-type-dropdown">
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
                        <option value="LINK">Link</option>
                    </select>
                    <i className="fa-lg fa fa-plus wbdv-create"
                       onClick={() => {
                           let w = {
                               widgetType: "HEADING"
                           };
                           createWidget(w)
                       }}></i>
                </Modal.Body>
            </Modal>

            <div className="wbdv-widget-controls">
                <b className="wbdv-create-new"
                   onClick={() => showCreateModal()}>Create New</b>
                <span>
                    <b>Preview</b>
                    <label className="switch">
                      <input type="checkbox"/>
                      <span className="slider"></span>
                    </label>
                    <b className="wbdv-save">Save</b>
                </span>
            </div>
            <div className="row wbdv-widget-list">
                <ul className="list-group">
                    {widgets.map((widget, index) =>
                         <li className="list-group-item" key={index}>
                             <div>
                                 {widget.widgetType === 'HEADING'
                                  && <HeadingWidget widget={widget} deleteWidget={deleteWidget}/>}
                                 {widget.widgetType === 'PARAGRAPH'
                                  && <ParagraphWidget widget={widget} deleteWidget={deleteWidget}/>}
                                 {widget.widgetType === 'LIST'
                                  && <ListWidget widget={widget} deleteWidget={deleteWidget}/>}
                                 {widget.widgetType === 'IMAGE'
                                  && <ImageWidget widget={widget} deleteWidget={deleteWidget}/>}
                                 {widget.widgetType === 'LINK'
                                  && <LinkWidget widget={widget} deleteWidget={deleteWidget}/>}
                             </div>
                         </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default WidgetListComponent