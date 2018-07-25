import React from 'react';
import {HeadingWidget} from "../components/widgets/HeadingWidget";
import {ParagraphWidget} from "../components/widgets/ParagraphWidget";
import '../styling/WidgetListStyling.css';
import {ListWidget} from "../components/widgets/ListWidget";
import {ImageWidget} from "../components/widgets/ImageWidget";
import {LinkWidget} from "../components/widgets/LinkWidget";


const WidgetListComponent = ({widgets}) =>
{
    let widgetTitle;
    let widgetType;
    return(
        <div className="row col-sm-8">
            <div className="wbdv-widget-controls">
                <b className="wbdv-create-new">Create New</b>
                <span>
                    <b>Preview</b>
                    <label class="switch">
                      <input type="checkbox"/>
                      <span class="slider"></span>
                    </label>
                    <b className="wbdv-save">Save</b>
                </span>
            </div>
            <div className="row wbdv-widget-list">
                <ul className="list-group">
                    {widgets.map((widget, index) =>
                         <li className="list-group-item" key={index}>
                             <div>
                                 {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget}/>}
                                 {widget.widgetType === 'PARAGRAPH' && <ParagraphWidget widget={widget}/>}
                                 {widget.widgetType === 'LIST' && <ListWidget widget={widget}/>}
                                 {widget.widgetType === 'IMAGE' && <ImageWidget widget={widget}/>}
                                 {widget.widgetType === 'LINK' && <LinkWidget widget={widget}/>}
                             </div>
                         </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default WidgetListComponent