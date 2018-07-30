import React from 'react'

export const HeadingWidget = ({widget, numWidgets, position, deleteWidget, updateWidget, previewMode, moveUp, moveDown}) => {
    let widgetType;
    let widgetTitle;
    let text;
    let size;

    return(
        <div className="wbdv-widget-content">
            <span className={`${previewMode === true ? 'hide' : ''}`}>
                 <select ref={node => widgetType = node}
                         className="form-control wbdv-type-dropdown"
                         defaultValue="HEADING"
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
                Heading Widget: {widget.title}
            </h4>

            <div className={`form-group row ${previewMode === true ? 'hide' : ''}`}>
                <label htmlFor="wbdv-heading-widget-title" className="col-sm-2">Widget Title</label>
                <div className="col-sm-10">
                    <input ref={node => widgetTitle = node}
                           id="wbdv-heading-widget-title"
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
                <label htmlFor="wbdv-heading-text" className="col-sm-2">Heading Text</label>
                <div className="col-sm-10">
                    <input ref={node => text = node}
                           id="wbdv-heading-text"
                           className="form-control"
                           value={widget.text}
                           placeholder="Heading Text"
                           onChange={() => {
                               widget.text = text.value
                               updateWidget(widget)
                           }}/>
                </div>
            </div>

            <div className={`form-group row ${previewMode === true ? 'hide' : ''}`}>
                <label htmlFor="wbdv-heading-size" className="col-sm-2">Heading Size</label>
                <div className="col-sm-10">
                    <select ref={node => size = node}
                            className="form-control"
                            defaultValue="H1"
                            onChange={() => {
                                widget.size = size.value
                                updateWidget(widget)
                            }}>
                        <option value="H1">Heading 1</option>
                        <option value="H2">Heading 2</option>
                        <option value="H3">Heading 3</option>
                    </select>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    {widget.size === 'H1' && <h1>{widget.text}</h1>}
                    {widget.size === 'H2' && <h2>{widget.text}</h2>}
                    {widget.size === 'H3' && <h3>{widget.text}</h3>}
                </div>
            </div>
        </div>
    )
}