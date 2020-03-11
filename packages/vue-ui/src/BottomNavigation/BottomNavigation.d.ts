import * as Vue from 'vue';
import { StandardProps } from '..';

export interface BottomNavigationProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, BottomNavigationClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type BottomNavigationClasskey = [<classKey>];

declare const BottomNavigation: Vue.ComponentType<BottomNavigationProps>;

export default BottomNavigation;