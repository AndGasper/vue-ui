import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TableProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TableClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TableClasskey = [<classKey>];

declare const Table: Vue.ComponentType<TableProps>;

export default Table;