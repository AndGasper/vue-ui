import * as Vue from 'vue';
import { StandardProps } from '..';

export interface DialogTitleProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, DialogTitleClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type DialogTitleClasskey = [<classKey>];

declare const DialogTitle: Vue.ComponentType<DialogTitleProps>;

export default DialogTitle;