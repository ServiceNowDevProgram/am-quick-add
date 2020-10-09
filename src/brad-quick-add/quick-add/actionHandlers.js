import { actionTypes } from '@servicenow/ui-core';
import { createHttpEffect } from '@servicenow/ui-effect-http';
import { ARTIFACT_ENDPOINT } from '../constants';

export default {
    actionHandlers: {
        'NOW_INPUT#VALUE_SET': (coeffects) => {
            const {action, state, updateState} = coeffects;
            const {value} = action.payload;
            const artifactTitle = value;
            updateState({artifactTitle});
        },
        'NOW_DROPDOWN#SELECTED_ITEMS_SET': (coeffects) => {
            const {action, state, updateState} = coeffects;
            const {value} = action.payload;
            console.log(JSON.stringify(value[0]));
            const artifactType = value[0];
            updateState({artifactType});
        },
        'NOW_BUTTON#CLICKED': (coeffects) => {
            const {state, dispatch} = coeffects;
            dispatch('CREATE_ARTIFACT', {
                data: {
                    'short_description' : state.artifactTitle,
                    'type': state.artifactType
                }
            });
        },
        'CREATE_ARTIFACT': createHttpEffect(ARTIFACT_ENDPOINT, {
            method: 'POST',
            dataParam: 'data',
            successActionType: 'CREATE_ARTIFACT_SUCCEEDED'
        }),
        'CREATE_ARTIFACT_SUCCEEDED': ({updateState, action}) => {
            const artifactTitle = '';
            updateState({artifactTitle});
        },
        'CREATE_ARTIFACT_ERROR': (coeffects) => {
            console.log('Error!\n' + JSON.stringify(coeffects.action.payload));
        }
    }
}