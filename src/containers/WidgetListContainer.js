import {connect} from 'react-redux';
import WidgetListComponent from './WidgetListComponent';

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    createModal: state.createModal,
    previewMode: state.previewMode})

const dispatcherToPropertyMapper = dispatch => (
    {
        deleteWidget: wid => dispatch({
                                          type: 'DELETE_WIDGET',
                                          widgetId: wid
                                      }),
        createWidget: w => dispatch({
                                        type: 'CREATE_WIDGET',
                                        widget: w
                                    }),
        updateWidget: w => dispatch({
                                        type: 'UPDATE_WIDGET',
                                        widget: w
                                    }),
        showCreateModal: () => dispatch({
                                            type: 'SHOW_CREATE_MODAL'
                                        }),
        hideCreateModal: () => dispatch({
                                            type: 'HIDE_CREATE_MODAL'
                                        }),
        togglePreviewMode: () => dispatch({
                                            type: 'TOGGLE_PREVIEW_MODE'
                                          })
        // disablePreviewMode: () => dispatch({
        //                                       type: 'DISABLE_PREVIEW_MODE'
        //                                   })
    }
)

const WidgetListContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent)

export default WidgetListContainer