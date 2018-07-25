import React from 'react'

export const ParagraphWidget = ({widget, deleteWidget, updateWidget}) => {
    let widgetType;

    return(
        <div className="wbdv-widget-content">
            <span>
                 <select onChange={() => {
                     let w = {
                         id: widget.id,
                         widgetType: widgetType.value
                     };
                     updateWidget(w)
                 }}
                         ref={node => widgetType = node}
                         className="form-control wbdv-type-dropdown"
                         defaultValue="PARAGRAPH">
                     <option value="HEADING">Heading</option>
                     <option value="PARAGRAPH">Paragraph</option>
                     <option value="LIST">List</option>
                     <option value="IMAGE">Image</option>
                     <option value="LINK">Link</option>
                 </select>
                 <i className="fa-lg fa fa-arrow-up wbdv-arrow-up"></i>
                 <i className="fa-lg fa fa-arrow-down wbdv-arrow-down"></i>
                 <i className="fa-lg fa fa-times wbdv-widget-remove"
                    onClick={() => {deleteWidget(widget.id)}}></i>
            </span>
            <h4>Paragraph Widget: {widget.title}</h4>

            <div className="form-group row">
                <label htmlFor="wbdv-paragraph-widget-title" className="col-sm-2">Widget Title</label>
                <div className="col-sm-10">
                    <input id="wbdv-paragraph-widget-title"
                           className="form-control"
                           placeholder="Widget Title"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="wbdv-paragraph-text" className="col-sm-2">Paragraph Text</label>
                <div className="col-sm-10">
                    <input id="wbdv-paragraph-text"
                           className="form-control"
                           placeholder="Paragraph Text"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="wbdv-paragraph-preview" className="col-sm-2">Preview</label>
                <div className="col-sm-10">
                    <input id="wbdv-paragraph-preview"
                           className="form-control"
                           readOnly="readonly"/>
                </div>
            </div>
        </div>
    )
}