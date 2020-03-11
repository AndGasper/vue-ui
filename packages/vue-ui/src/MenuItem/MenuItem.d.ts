import * as Vue from 'vue';
import { StandardProps } from '..';

export interface MenuItemProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, MenuItemClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type MenuItemClasskey = [<classKey>];

declare const MenuItem: Vue.ComponentType<MenuItemProps>;

export default MenuItem;