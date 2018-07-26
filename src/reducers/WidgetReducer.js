let initialState = {
    widgets: [
        {id: 123, title: 'Widget 1', position: 1, widgetType: 'HEADING', headingText: 'This is one big header', headingSize: 'H1'},
        {id: 234, title: 'Widget 2', position: 2, widgetType: 'PARAGRAPH', paragraphText: 'This is a paragraph'},
        {id: 345, title: 'Widget 3', position: 3, widgetType: 'LIST', listItems: 'item 1\nitem 2', listType: 'UL'},
        {id: 456, title: 'Widget 4', position: 4, widgetType: 'IMAGE', imageURL: 'https://data.whicdn.com/images/68232462/large.jpg'},
        {id: 567, title: 'Widget 5', position: 5, widgetType: 'LINK', linkText: 'Linky Link', linkURL: 'https://data.whicdn.com/images/68232462/large.jpg'}
    ],
    createModal: false,
    previewMode: false
};

export const WidgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_WIDGET':
            return {
                ...state,
                widgets: state.widgets.filter(
                    widget => widget.id !== action.widgetId
                )
            }
        case 'CREATE_WIDGET':
            return {
                ...state,
                widgets: [
                    ...state.widgets, action.widget
                ]
            }
        case 'UPDATE_WIDGET':
            let w = {
                ...state,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widget.id) {
                        widget.widgetType = action.widget.widgetType
                        widget.title = action.widget.title

                        switch (widget.widgetType) {
                            case 'HEADING':
                                widget.headingSize = action.widget.headingSize
                            case 'PARAGRAPH':
                                widget.paragraphText = action.widget.paragraphText
                            case 'LIST':
                                widget.listType = action.widget.listType
                                widget.listItems = action.widget.listItems
                            case 'IMAGE':
                                widget.imageURL = action.widget.imageURL
                            case 'LINK':
                                widget.linkText = action.widget.linkText
                                widget.linkURL = action.widget.linkURL
                        }
                        return widget
                    } else {
                        return widget
                    }
                })
            }
            return w;
        case 'SHOW_CREATE_MODAL':
            return {
                ...state,
                createModal: true
            }
        case 'HIDE_CREATE_MODAL':
            return {
                ...state,
                createModal: false
            }
        case 'TOGGLE_PREVIEW_MODE':
            return{
                ...state,
                widgets: state.widgets.map(widget => {
                    widget.preview = !(widget.preview)
                    return widget
                }),
                previewMode: !(state.previewMode)
            }
        // case 'DISABLE_PREVIEW_MODE':
        //     return{
        //         ...state,
        //         widgets: state.widgets.map(widget => {
        //             widget.preview = false
        //             return widget
        //         }),
        //         previewMode: false
        //     }
        default:
            return state
    }
}