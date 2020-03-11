import * as Vue from 'vue';
import { StandardProps } from '..';

export interface DividerProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, DividerClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type DividerClasskey = [<classKey>];

declare const Divider: Vue.ComponentType<DividerProps>;

export default Divider;