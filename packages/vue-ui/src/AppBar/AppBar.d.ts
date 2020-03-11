import * as Vue from 'vue';
import { StandardProps } from '..';

export interface AppBarProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, AppBarClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type AppBarClasskey = [<classKey>];

declare const AppBar: Vue.ComponentType<AppBarProps>;

export default AppBar;