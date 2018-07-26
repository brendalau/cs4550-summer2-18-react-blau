import React from 'react'

export const HeadingWidget = ({widget, numWidgets, deleteWidget, updateWidget}) => {
    let widgetType;
    let widgetTitle;
    let headingText;
    let headingSize;

    return(
        <div className="wbdv-widget-content">
            <span>
                 <select ref={node => widgetType = node}
                         className="form-control wbdv-type-dropdown"
                         defaultValue="HEADING"
                         onChange={() => {
                             widget.widgetType = widgetType.value
                             updateWidget(widget)
                         }}>
                     <option value="HEADING">Heading</option>
                     <option value="PARAGRAPH">Paragraph</option>
                     <option value="LIST">List</option>
                     <option value="IMAGE">Image</option>
                     <option value="LINK">Link</option>
                 </select>
                 <i className={`fa-lg fa fa-arrow-up wbdv-arrow-up ${widget.position === 1 ? 'disabled' : ''}`}></i>
                 <i className={`fa-lg fa fa-arrow-down wbdv-arrow-down ${widget.position === numWidgets ? 'disabled' : ''}`}></i>
                 <i className="fa-lg fa fa-times wbdv-widget-remove"
                    onClick={() => {deleteWidget(widget.id)}}></i>
            </span>
            <h4 className="wbdv-widget-title">Heading Widget: {widget.title}</h4>

            <div className="form-group row">
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

            <div className="form-group row">
                <label htmlFor="wbdv-heading-text" className="col-sm-2">Heading Text</label>
                <div className="col-sm-10">
                    <input ref={node => headingText = node}
                           id="wbdv-heading-text"
                           className="form-control"
                           value={widget.headingText}
                           placeholder="Heading Text"
                           onChange={() => {
                               widget.headingText = headingText.value
                               updateWidget(widget)
                           }}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="wbdv-heading-size" className="col-sm-2">Heading Size</label>
                <div className="col-sm-10">
                    <select ref={node => headingSize = node}
                            className="form-control"
                            defaultValue="H1"
                            onChange={() => {
                                widget.headingSize = headingSize.value
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
                    {widget.headingSize === 'H1' && <h1>{widget.headingText}</h1>}
                    {widget.headingSize === 'H2' && <h2>{widget.headingText}</h2>}
                    {widget.headingSize === 'H3' && <h3>{widget.headingText}</h3>}
                </div>
            </div>
        </div>
    )
}