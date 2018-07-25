import React from 'react'

export const ListWidget = ({widget, deleteWidget, updateWidget}) => {
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
                         defaultValue="LIST">
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
            <h4>List Widget: {widget.title}</h4>

            <div className="form-group row">
                <label htmlFor="wbdv-list-widget-title" className="col-sm-2">Widget Title</label>
                <div className="col-sm-10">
                    <input id="wbdv-list-widget-title"
                           className="form-control"
                           placeholder="Widget Title"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="wbdv-list-items" className="col-sm-2">List Items</label>
                <div className="col-sm-10">
                    <textarea id="wbdv-list-items"
                              className="form-control"
                              placeholder={'Put each\nitem in\na separate line'}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="wbdv-list-type" className="col-sm-2">List Type</label>
                <div className="col-sm-10">
                    <select className="form-control">
                        <option value="UL">Unordered List</option>
                        <option value="OL">Ordered List</option>
                    </select>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="wbdv-list-preview" className="col-sm-2">Preview</label>
                <div className="col-sm-10">
                    <input id="wbdv-list-preview"
                           className="form-control"
                           readOnly="readonly"/>
                </div>
            </div>
        </div>
    )
}