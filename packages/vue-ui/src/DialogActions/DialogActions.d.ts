import * as Vue from 'vue';
import { StandardProps } from '..';

export interface DialogActionsProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, DialogActionsClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type DialogActionsClasskey = [<classKey>];

declare const DialogActions: Vue.ComponentType<DialogActionsProps>;

export default DialogActions;