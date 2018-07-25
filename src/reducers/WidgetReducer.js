let initialState = {
    widgets: [
        {title: 'Widget 1', id: 123, widgetType: 'HEADING'},
        {title: 'Widget 2', id: 234, widgetType: 'PARAGRAPH'},
        {title: 'Widget 3', id: 345, widgetType: 'LIST'},
        {title: 'Widget 4', id: 456, widgetType: 'IMAGE'},
        {title: 'Widget 5', id: 567, widgetType: 'LINK'}
    ],
    createModal: false
};

export const WidgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(
                    widget => widget.id !== action.widgetId
                )
            }
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    action.widget,
                    ...state.widgets
                ]
            }
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widget.id) {
                        widget.widgetType = action.widget.widgetType
                        return widget
                    } else {
                        return widget
                    }
                })
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