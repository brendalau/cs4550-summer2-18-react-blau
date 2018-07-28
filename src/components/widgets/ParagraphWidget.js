import React from 'react'

export const ParagraphWidget = ({widget, numWidgets, position, deleteWidget, updateWidget, previewMode, moveUp, moveDown}) => {
    let widgetType;
    let widgetTitle;
    let text;

    return(
        <div className="wbdv-widget-content">
            <span className={`${previewMode === true ? 'hide' : ''}`}>
                 <select ref={node => widgetType = node}
                         className="form-control wbdv-type-dropdown"
                         defaultValue="PARAGRAPH"
                         onChange={() => {
                             widget.type = widgetType.value
                             updateWidget(widget)
                         }}>
                     <option value="HEADING">Heading</option>
                     <option value="PARAGRAPH">Paragraph</option>
                     <option value="LIST">List</option>
                     <option value="IMAGE">Image</option>
                     <option value="LINK">Link</option>
                 </select>
                 <i className={`fa-lg fa fa-arrow-up wbdv-arrow-up ${position === 0 ? 'disabled' : ''}`}
                    onClick={() => {moveUp(widget.id)}}></i>
                 <i className={`fa-lg fa fa-arrow-down wbdv-arrow-down ${position === numWidgets-1 ? 'disabled' : ''}`}
                    onClick={() => {moveUp(widget.id)}}></i>
                 <i className="fa-lg fa fa-times wbdv-widget-remove"
                    onClick={() => {deleteWidget(widget.id)}}></i>
            </span>

            <h4 className={`wbdv-widget-title ${previewMode === true ? 'hide' : ''}`}>
                Paragraph Widget: {widget.title}
            </h4>

            <div className={`form-group row ${previewMode === true ? 'hide' : ''}`}>
                <label htmlFor="wbdv-paragraph-widget-title" className="col-sm-2">Widget Title</label>
                <div className="col-sm-10">
                    <input ref={node => widgetTitle = node}
                           id="wbdv-paragraph-widget-title"
                           className="form-control"
                           value={widget.title}
                           placeholder="Widget Title"
                           onChange={() => {
                               widget.title = widgetTitle.value
                               updateWidget(widget)
                           }}/>
                </div>
            </div>

            <div className={`form-group row ${previewMode === true ? 'hide' : ''}`}>
                <label htmlFor="wbdv-paragraph-text" className="col-sm-2">Paragraph Text</label>
                <div className="col-sm-10">
                    <input ref={node => text = node}
                           id="wbdv-paragraph-text"
                           className="form-control"
                           value={widget.text}
                           placeholder="Paragraph Text"
                           onChange={() => {
                               widget.text = text.value
                               updateWidget(widget)
                           }}/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    <p>{widget.text}</p>
                </div>
            </div>
        </div>
    )
}