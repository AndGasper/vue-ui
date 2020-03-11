import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ListItemIconProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ListItemIconClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ListItemIconClasskey = [<classKey>];

declare const ListItemIcon: Vue.ComponentType<ListItemIconProps>;

export default ListItemIcon;