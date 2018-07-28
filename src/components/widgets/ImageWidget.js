import React from 'react'

export const ImageWidget = ({widget, numWidgets, position, deleteWidget, updateWidget, previewMode, moveUp, moveDown}) => {
    let widgetType;
    let widgetTitle;
    let src;


    return(
        <div className="wbdv-widget-content">
            <span className={`${previewMode === true ? 'hide' : ''}`}>
                 <select ref={node => widgetType = node}
                         className="form-control wbdv-type-dropdown"
                         defaultValue="IMAGE"
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
                    onClick={() => {moveDown(widget.id)}}></i>
                 <i className="fa-lg fa fa-times wbdv-widget-remove"
                    onClick={() => {deleteWidget(widget.id)}}></i>
            </span>

            <h4 className={`wbdv-widget-title ${previewMode === true ? 'hide' : ''}`}>
                Image Widget: {widget.title}
            </h4>

            <div className={`form-group row ${previewMode === true ? 'hide' : ''}`}>
                <label htmlFor="wbdv-image-widget-title" className="col-sm-2">Widget Title</label>
                <div className="col-sm-10">
                    <input ref={node => widgetTitle = node}
                           id="wbdv-image-widget-title"
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
                <label htmlFor="wbdv-image-url" className="col-sm-2">Image URL</label>
                <div className="col-sm-10">
                    <input ref={node => src = node}
                           id="wbdv-image-url"
                           className="form-control"
                           value={widget.src}
                           placeholder="Image URL"
                           onChange={() => {
                               widget.src = src.value
                               updateWidget(widget)
                           }}/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    <img src={widget.src} height="200"/>
                </div>
            </div>
        </div>
    )
}