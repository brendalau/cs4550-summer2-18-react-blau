import React from 'react'

export const HeadingWidget = ({widget, updateWidget}) => {
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
                     <option value="HEADING" selected="selected">Heading</option>
                     <option value="PARAGRAPH">Paragraph</option>
                     <option value="LIST">List</option>
                     <option value="IMAGE">Image</option>
                     <option value="LINK">Link</option>
                 </select>
                 <i className="fa-lg fa fa-arrow-up wbdv-arrow-up"></i>
                 <i className="fa-lg fa fa-arrow-down wbdv-arrow-down"></i>
                 <i className="fa-lg fa fa-times wbdv-widget-remove"></i>
            </span>
            <h4>Heading Widget: {widget.title}</h4>

            <div className="form-group row">
                <label for="wbdv-widget-title" className="col-sm-2">Widget Title</label>
                <div className="col-sm-10">
                    <input id="wbdv-widget-title"
                           className="form-control"
                           placeholder="Widget Title"/>
                </div>
            </div>

            <div className="form-group row">
                <label for="wbdv-heading-text" className="col-sm-2">Heading Text</label>
                <div className="col-sm-10">
                    <input id="wbdv-heading-text"
                           className="form-control"
                           placeholder="Heading Text"/>
                </div>
            </div>

            <div className="form-group row">
                <label for="wbdv-heading-size" className="col-sm-2">Heading Size</label>
                <div className="col-sm-10">
                    <select className="form-control">
                        <option value="H1">Heading 1</option>
                        <option value="H2">Heading 2</option>
                        <option value="H3">Heading 3</option>
                    </select>
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