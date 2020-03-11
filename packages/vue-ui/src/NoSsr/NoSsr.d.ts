import * as Vue from 'vue';
import { StandardProps } from '..';

export interface NoSsrProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, NoSsrClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type NoSsrClasskey = [<classKey>];

declare const NoSsr: Vue.ComponentType<NoSsrProps>;

export default NoSsr;