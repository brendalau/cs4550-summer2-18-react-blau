import {connect} from 'react-redux';
import WidgetListComponent from './WidgetListComponent';

const stateToPropertyMapper = state => ({
    currWidget: state.currWidget,
    widgets: state.widgets,
    createModal: state.createModal,
    previewMode: state.previewMode})

const LESSON_API_URL = 'http://localhost:8080/api/lesson';
const WIDGET_API_URL = 'http://localhost:8080/api/widget';

const dispatcherToPropertyMapper = dispatch => (
    {
        findAllWidgets: () =>
            fetch(WIDGET_API_URL)
                .then(response => response.json())
                .then(widgets => dispatch({
                                        type: 'FIND_ALL_WIDGETS',
                                        widgets: widgets
                                    })),
        findWidgetById: wid =>
            fetch(WIDGET_API_URL + '/' + wid)
                .then(response => response.json())
                .then(widget => dispatch({
                                        type: 'FIND_WIDGET_BY_ID',
                                        widget: widget
                                    })),
        findWidgetsByLesson: lid =>
            fetch(LESSON_API_URL + '/' + lid + '/widget')
                .then(response => response.json())
                .then(widgets => dispatch({
                                            type: 'FIND_WIDGETS_BY_LESSON',
                                            widgets: widgets
                                        })),
        createWidget: (lid, w) => dispatch({
                                        type: 'CREATE_WIDGET',
                                        lessonId: lid,
                                        widget: w
                                    }),
        updateWidget: w => dispatch({
                                        type: 'UPDATE_WIDGET',
                                        widget: w
                                    }),
        deleteWidget: wid => dispatch({
                                          type: 'DELETE_WIDGET',
                                          widgetId: wid
                                      }),
        saveWidgets: lid => dispatch({
                                        type: 'SAVE_WIDGETS',
                                        lessonId: lid
                                    }),
        showCreateModal: () => dispatch({
                                            type: 'SHOW_CREATE_MODAL'
                                        }),
        hideCreateModal: () => dispatch({
                                            type: 'HIDE_CREATE_MODAL'
                                        }),
        togglePreviewMode: () => dispatch({
                                            type: 'TOGGLE_PREVIEW_MODE'
                                          }),
        moveUp: wid => dispatch({
                                    type: 'MOVE_UP',
                                    widgetId: wid
                                }),
        moveDown: wid => dispatch({
                                    type: 'MOVE_DOWN',
                                    widgetId: wid
                                })
    }
)

const WidgetListContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent)

export default WidgetListContainer