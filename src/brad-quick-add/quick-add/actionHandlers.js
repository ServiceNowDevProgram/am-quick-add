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
        'NOW_BUTTON#CLICKED': (coeffects) => {
            const {state, dispatch} = coeffects;
            dispatch('CREATE_ARTIFACT', {
                data: {'short_description' : state.artifactTitle}
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