import React from 'react'

export const ListWidget = ({widget, numWidgets, deleteWidget, updateWidget}) => {
    let widgetType;
    let widgetTitle;
    let listItems;
    let listType;

    return(
        <div className="wbdv-widget-content">
            <span>
                 <select ref={node => widgetType = node}
                         className="form-control wbdv-type-dropdown"
                         defaultValue="LIST"
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
            <h4 className="wbdv-widget-title">List Widget: {widget.title}</h4>

            <div className="form-group row">
                <label htmlFor="wbdv-list-widget-title" className="col-sm-2">Widget Title</label>
                <div className="col-sm-10">
                    <input ref={node => widgetTitle = node}
                           id="wbdv-list-widget-title"
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
                <label htmlFor="wbdv-list-items" className="col-sm-2">List Items</label>
                <div className="col-sm-10">
                    <textarea ref={node => listItems = node}
                              id="wbdv-list-items"
                              className="form-control"
                              value={widget.listItems}
                              placeholder={'Put each\nitem in\na separate line'}
                              onChange={() => {
                                  widget.listItems = listItems.value
                                  updateWidget(widget)
                              }}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="wbdv-list-type" className="col-sm-2">List Type</label>
                <div className="col-sm-10">
                    <select ref={node => listType = node}
                            className="form-control"
                            defaultValue="UL"
                            onChange={() => {
                                widget.listType = listType.value
                                updateWidget(widget)
                            }}>
                        <option value="UL">Unordered List</option>
                        <option value="OL">Ordered List</option>
                    </select>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    {widget.listType === 'UL'
                        &&  <ul>
                                {widget.listItems.split('\n').map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                            </ul>}
                    {widget.listType === 'OL'
                        &&  <ol>
                                {widget.listItems.split('\n').map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ol>}

                </div>
            </div>
        </div>
    )
}