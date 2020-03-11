import * as Vue from 'vue';
import { StandardProps } from '..';

export interface SnackbarContentProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, SnackbarContentClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type SnackbarContentClasskey = [<classKey>];

declare const SnackbarContent: Vue.ComponentType<SnackbarContentProps>;

export default SnackbarContent;