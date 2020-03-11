import * as Vue from 'vue';
import { StandardProps } from '..';

export interface DialogContentTextProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, DialogContentTextClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type DialogContentTextClasskey = [<classKey>];

declare const DialogContentText: Vue.ComponentType<DialogContentTextProps>;

export default DialogContentText;