import React from 'react'

export const ImageWidget = ({widget, updateWidget}) => {
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
                         className="form-control wbdv-type-dropdown">
                     <option value="HEADING">Heading</option>
                     <option value="PARAGRAPH">Paragraph</option>
                     <option value="LIST">List</option>
                     <option value="IMAGE" selected="selected">Image</option>
                     <option value="LINK">Link</option>
                 </select>
                 <i className="fa-lg fa fa-arrow-up wbdv-arrow-up"></i>
                 <i className="fa-lg fa fa-arrow-down wbdv-arrow-down"></i>
                 <i className="fa-lg fa fa-times wbdv-widget-remove"></i>
            </span>
            <h4>Image Widget: {widget.title}</h4>

            <div className="form-group row">
                <label for="wbdv-widget-title" className="col-sm-2">Widget Title</label>
                <div className="col-sm-10">
                    <input id="wbdv-widget-title"
                           className="form-control"
                           placeholder="Widget Title"/>
                </div>
            </div>

            <div className="form-group row">
                <label for="wbdv-image-url" className="col-sm-2">Image URL</label>
                <div className="col-sm-10">
                    <input id="wbdv-image-url"
                           className="form-control"
                           placeholder="Image URL"/>
                </div>
            </div>

            <div className="form-group row">
                <label for="wbdv-preview" className="col-sm-2">Preview</label>
                <div className="col-sm-10">
                    <input id="wbdv-preview"
                           className="form-control"
                           readonly="readonly"/>
                </div>
            </div>
        </div>
    )
}