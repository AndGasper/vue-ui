import * as Vue from 'vue';
import { StandardProps } from '..';

export interface DialogContentProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, DialogContentClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type DialogContentClasskey = [<classKey>];

declare const DialogContent: Vue.ComponentType<DialogContentProps>;

export default DialogContent;