import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ListSubheaderProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ListSubheaderClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ListSubheaderClasskey = [<classKey>];

declare const ListSubheader: Vue.ComponentType<ListSubheaderProps>;

export default ListSubheader;