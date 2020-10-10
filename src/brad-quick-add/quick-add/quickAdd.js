import {createCustomElement} from '@servicenow/ui-core';
import actionHandlers from './actionHandlers';
import styles from './styles.scss';
import view from './view';

createCustomElement('brad-quick-add', {
	view,
    styles,
    initialState: {
		artifactTitle: '',
		artifactType: 'blog_post',
		msg: 'Lets build the component!'
	},
	...actionHandlers
});