import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TabProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TabClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TabClasskey = [<classKey>];

declare const Tab: Vue.ComponentType<TabProps>;

export default Tab;