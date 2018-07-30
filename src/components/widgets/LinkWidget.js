import React from 'react'

export const LinkWidget = ({widget, numWidgets, position, deleteWidget, updateWidget, previewMode, moveUp, moveDown}) => {
    let widgetType;
    let widgetTitle;
    let text;
    let href;

    return(
        <div className="wbdv-widget-content">
            <span className={`${previewMode === true ? 'hide' : ''}`}>
                 <select ref={node => widgetType = node}
                         className="form-control wbdv-type-dropdown"
                         defaultValue="LINK"
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
                    onClick={() => {moveUp(widget)}}></i>
                 <i className={`fa-lg fa fa-arrow-down wbdv-arrow-down ${position === numWidgets-1 ? 'disabled' : ''}`}
                    onClick={() => {moveDown(widget)}}></i>
                 <i className="fa-lg fa fa-times wbdv-widget-remove"
                    onClick={() => {deleteWidget(widget.id)}}></i>
            </span>

            <h4 className={`wbdv-widget-title ${previewMode === true ? 'hide' : ''}`}>
                Link Widget: {widget.title}
            </h4>

            <div className={`form-group row ${previewMode === true ? 'hide' : ''}`}>
                <label htmlFor="wbdv-link-widget-title" className="col-sm-2">Widget Title</label>
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
                <label htmlFor="wbdv-link-text" className="col-sm-2">Link Text</label>
                <div className="col-sm-10">
                    <input ref={node => text = node}
                           id="wbdv-link-text"
                           className="form-control"
                           value={widget.text}
                           placeholder="Link Text"
                           onChange={() => {
                               widget.text = text.value
                               updateWidget(widget)
                           }}/>
                </div>
            </div>

            <div className={`form-group row ${previewMode === true ? 'hide' : ''}`}>
                <label htmlFor="wbdv-link-url" className="col-sm-2">Link URL</label>
                <div className="col-sm-10">
                    <input ref={node => href = node}
                           id="wbdv-link-url"
                           className="form-control"
                           value={widget.href}
                           placeholder="Link URL"
                           onChange={() => {
                               widget.href = href.value
                               updateWidget(widget)
                           }}/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    <a href={widget.href} className="wbdv-widget-link">{widget.text}</a>
                </div>
            </div>
        </div>
    )
}