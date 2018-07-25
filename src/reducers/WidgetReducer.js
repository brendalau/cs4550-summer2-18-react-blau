let initialState = {
    widgets: [
        {id: 123, title: 'Widget 1', position: 0, widgetType: 'HEADING', headingText: 'This is one big header', headingSize: 'H1'},
        {id: 234, title: 'Widget 2', position: 1, widgetType: 'PARAGRAPH', paragraphText: 'This is a paragraph'},
        {id: 345, title: 'Widget 3', position: 2, widgetType: 'LIST', listItems: 'item 1\nitem 2', listType: 'UL'},
        {id: 456, title: 'Widget 4', position: 3, widgetType: 'IMAGE', imageURL: 'https://data.whicdn.com/images/68232462/large.jpg'},
        {id: 567, title: 'Widget 5', position: 4, widgetType: 'LINK', linkText: 'Linky Link', linkURL: 'https://data.whicdn.com/images/68232462/large.jpg'}
    ],
    createModal: false
};

export const WidgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(
                    widget => widget.id !== action.widgetId
                ),
                createModal: state.createModal
            }
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    action.widget,
                    ...state.widgets
                ],
                createModal: state.createModal
            }
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widget.id) {
                        widget.widgetType = action.widget.widgetType
                        widget.title = action.widget.title

                        if (widget.widgetType === 'HEADING') {
                            widget.headingSize = action.widget.headingSize
                        } else if (widget.widgetType === 'LIST') {
                            widget.listType = action.widget.listType
                            widget.listItems = action.widget.listItems
                        }
                        return widget
                    } else {
                        return widget
                    }
                }),
                createModal: state.createModal
            }
        case 'SHOW_CREATE_MODAL':
            return {
                widgets: state.widgets,
                createModal: true
            }
        case 'HIDE_CREATE_MODAL':
            return {
                widgets: state.widgets,
                createModal: false
            }
        default:
            return state
    }
}