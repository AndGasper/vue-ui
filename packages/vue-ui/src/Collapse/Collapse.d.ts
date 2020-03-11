import * as Vue from 'vue';
import { StandardProps } from '..';

export interface CollapseProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, CollapseClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type CollapseClasskey = [<classKey>];

declare const Collapse: Vue.ComponentType<CollapseProps>;

export default Collapse;