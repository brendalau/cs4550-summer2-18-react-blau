import React from 'react'

export const ImageWidget = ({widget, deleteWidget, updateWidget}) => {
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
                         defaultValue="IMAGE">
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
            <h4 className="wbdv-widget-title">Image Widget: {widget.title}</h4>

            <div className="form-group row">
                <label htmlFor="wbdv-image-widget-title" className="col-sm-2">Widget Title</label>
                <div className="col-sm-10">
                    <input id="wbdv-image-widget-title"
                           className="form-control"
                           placeholder="Widget Title"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="wbdv-image-url" className="col-sm-2">Image URL</label>
                <div className="col-sm-10">
                    <input id="wbdv-image-url"
                           className="form-control"
                           placeholder="Image URL"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="wbdv-image-preview" className="col-sm-2">Preview</label>
                <div className="col-sm-10">
                    <input id="wbdv-image-preview"
                           className="form-control"
                           readOnly="readonly"/>
                </div>
            </div>
        </div>
    )
}