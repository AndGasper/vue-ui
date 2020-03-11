import * as Vue from 'vue';
import { StandardProps } from '..';

export interface DialogProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, DialogClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type DialogClasskey = [<classKey>];

declare const Dialog: Vue.ComponentType<DialogProps>;

export default Dialog;