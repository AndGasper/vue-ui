import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TabsProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TabsClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TabsClasskey = [<classKey>];

declare const Tabs: Vue.ComponentType<TabsProps>;

export default Tabs;