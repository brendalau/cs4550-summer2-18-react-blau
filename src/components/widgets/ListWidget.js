import React from 'react'

export const ListWidget = ({widget, deleteWidget, updateWidget}) => {
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
                             let w = {
                                 id: widget.id,
                                 title: widget.id,
                                 widgetType: widgetType.value
                             };
                             updateWidget(w)
                         }}>
                     <option value="HEADING">Heading</option>
                     <option value="PARAGRAPH">Paragraph</option>
                     <option value="LIST">List</option>
                     <option value="IMAGE">Image</option>
                     <option value="LINK">Link</option>
                 </select>
                 <i className={`fa-lg fa fa-arrow-up wbdv-arrow-up ${widget.position === 0 ? 'disabled' : ''}`}></i>
                 <i className={`fa-lg fa fa-arrow-down wbdv-arrow-down ${widget.position === 4 ? 'disabled' : ''}`}></i>
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
                               let w = {
                                   id: widget.id,
                                   title: widgetTitle.value
                               };
                               updateWidget(w)
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
                                  let w = {
                                      id: widget.id,
                                      listItems: listItems.value
                                  };
                                  updateWidget(w)
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
                                let w = {
                                    id: widget.id,
                                    listType: listType.value
                                };
                                updateWidget(w)
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