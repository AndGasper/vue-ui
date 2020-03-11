import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ListItemProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ListItemClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ListItemClasskey = [<classKey>];

declare const ListItem: Vue.ComponentType<ListItemProps>;

export default ListItem;