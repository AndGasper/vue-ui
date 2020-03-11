import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ListProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ListClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ListClasskey = [<classKey>];

declare const List: Vue.ComponentType<ListProps>;

export default List;