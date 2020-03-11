import * as Vue from 'vue';
import { StandardProps } from '..';

export interface MenuListProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, MenuListClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type MenuListClasskey = [<classKey>];

declare const MenuList: Vue.ComponentType<MenuListProps>;

export default MenuList;