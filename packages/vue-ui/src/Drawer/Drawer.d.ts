import * as Vue from 'vue';
import { StandardProps } from '..';

export interface DrawerProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, DrawerClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type DrawerClasskey = [<classKey>];

declare const Drawer: Vue.ComponentType<DrawerProps>;

export default Drawer;