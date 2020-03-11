import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TableCellProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TableCellClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TableCellClasskey = [<classKey>];

declare const TableCell: Vue.ComponentType<TableCellProps>;

export default TableCell;