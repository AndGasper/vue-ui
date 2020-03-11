import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ListItemTextProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ListItemTextClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ListItemTextClasskey = [<classKey>];

declare const ListItemText: Vue.ComponentType<ListItemTextProps>;

export default ListItemText;