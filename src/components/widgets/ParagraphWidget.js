import React from 'react'

export const ParagraphWidget = ({widget, numWidgets, deleteWidget, updateWidget}) => {
    let widgetType;
    let widgetTitle;
    let paragraphText;

    return(
        <div className="wbdv-widget-content">
            <span>
                 <select ref={node => widgetType = node}
                         className="form-control wbdv-type-dropdown"
                         defaultValue="PARAGRAPH"
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
            <h4 className="wbdv-widget-title">Paragraph Widget: {widget.title}</h4>

            <div className="form-group row">
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

            <div className="form-group row">
                <label htmlFor="wbdv-paragraph-text" className="col-sm-2">Paragraph Text</label>
                <div className="col-sm-10">
                    <input ref={node => paragraphText = node}
                           id="wbdv-paragraph-text"
                           className="form-control"
                           value={widget.paragraphText}
                           placeholder="Paragraph Text"
                           onChange={() => {
                               widget.paragraphText = paragraphText.value
                               updateWidget(widget)
                           }}/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    <p>{widget.paragraphText}</p>
                </div>
            </div>
        </div>
    )
}