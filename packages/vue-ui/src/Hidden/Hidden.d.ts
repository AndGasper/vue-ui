import * as Vue from 'vue';
import { StandardProps } from '..';

export interface HiddenProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, HiddenClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type HiddenClasskey = [<classKey>];

declare const Hidden: Vue.ComponentType<HiddenProps>;

export default Hidden;