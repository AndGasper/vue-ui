import * as Vue from 'vue';
import { StandardProps } from '..';

export interface SnackbarProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, SnackbarClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type SnackbarClasskey = [<classKey>];

declare const Snackbar: Vue.ComponentType<SnackbarProps>;

export default Snackbar;