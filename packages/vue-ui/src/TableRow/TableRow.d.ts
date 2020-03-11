import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TableRowProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TableRowClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TableRowClasskey = [<classKey>];

declare const TableRow: Vue.ComponentType<TableRowProps>;

export default TableRow;