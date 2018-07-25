import React from 'react'

export const ListWidget = ({widget, updateWidget}) => {
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
                     <option value="LIST" selected="selected">List</option>
                     <option value="IMAGE">Image</option>
                     <option value="LINK">Link</option>
                 </select>
                 <i className="fa-lg fa fa-arrow-up wbdv-arrow-up"></i>
                 <i className="fa-lg fa fa-arrow-down wbdv-arrow-down"></i>
                 <i className="fa-lg fa fa-times wbdv-widget-remove"></i>
            </span>
            <h4>List Widget: {widget.title}</h4>

            <div className="form-group row">
                <label for="wbdv-widget-title" className="col-sm-2">Widget Title</label>
                <div className="col-sm-10">
                    <input id="wbdv-widget-title"
                           className="form-control"
                           placeholder="Widget Title"/>
                </div>
            </div>

            <div className="form-group row">
                <label for="wbdv-list-items" className="col-sm-2">List Items</label>
                <div className="col-sm-10">
                    <textarea id="wbdv-list-items"
                              className="form-control"
                              placeholder={'Put each\nitem in\na separate line'}/>
                </div>
            </div>

            <div className="form-group row">
                <label for="wbdv-list-type" className="col-sm-2">List Type</label>
                <div className="col-sm-10">
                    <select className="form-control">
                        <option value="UL">Unordered List</option>
                        <option value="OL">Ordered List</option>
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