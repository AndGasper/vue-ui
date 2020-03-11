import * as Vue from 'vue';
import { StandardProps } from '..';

export interface MenuProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, MenuClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type MenuClasskey = [<classKey>];

declare const Menu: Vue.ComponentType<MenuProps>;

export default Menu;