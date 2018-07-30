let initialState = {
    currWidget: null,
    widgets: [
        // {id: 123, title: 'Widget 1', type: 'HEADING', text: 'This is one big header', size: 'H1'},
        // {id: 234, title: 'Widget 2', type: 'PARAGRAPH', text: 'This is a paragraph'},
        // {id: 345, title: 'Widget 3', type: 'LIST', listItems: 'item 1\nitem 2', listType: 'UL'},
        // {id: 456, title: 'Widget 4', type: 'IMAGE', src: 'https://data.whicdn.com/images/68232462/large.jpg'},
        // {id: 567, title: 'Widget 5', type: 'LINK', text: 'Linky Link', href: 'https://data.whicdn.com/images/68232462/large.jpg'}
    ],
    createModal: false,
    previewMode: false
};

const LESSON_API_URL = 'http://localhost:8080/api/lesson';

export const WidgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIND_ALL_WIDGETS':
            return {
                ...state,
                widgets: action.widgets
            }
        case 'FIND_WIDGET_BY_ID':
            return {
                ...state,
                currWidget: action.widget
            }
        case 'FIND_WIDGETS_BY_LESSON':
            return {
                ...state,
                widgets: action.widgets
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
                        widget.type = action.widget.type
                        widget.title = action.widget.title

                        switch (widget.type) {
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
        case 'DELETE_WIDGET':
            return {
                ...state,
                widgets: state.widgets.filter(
                    widget => widget.id !== action.widgetId
                )
            }
        case 'SAVE_WIDGETS':
            fetch(LESSON_API_URL + '/' + action.lessonId, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(state.widgets)
            })
            return state
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
        case 'MOVE_UP':
            let fromIndexUp = state.widgets.indexOf(action.widget)
            let toIndexUp = fromIndexUp--
            state.widgets.splice(toIndexUp, 0, state.widgets.splice(fromIndexUp, 1)[0])
            return{
                ...state,
                widgets: state.widgets.splice(0)
            }
        case 'MOVE_DOWN':
            let fromIndexDown = state.widgets.indexOf(action.widget)
            let toIndexDown = fromIndexDown++
            state.widgets.splice(toIndexDown, 0, state.widgets.splice(fromIndexDown, 1)[0])
            return{
                ...state,
                widgets: state.widgets.splice(0)
            }
        default:
            return state
    }
}