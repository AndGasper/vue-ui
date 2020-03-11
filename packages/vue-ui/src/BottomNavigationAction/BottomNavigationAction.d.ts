import * as Vue from 'vue';
import { StandardProps } from '..';

export interface BottomNavigationActionProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, BottomNavigationActionClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type BottomNavigationActionClasskey = [<classKey>];

declare const BottomNavigationAction: Vue.ComponentType<BottomNavigationActionProps>;

export default BottomNavigationAction;