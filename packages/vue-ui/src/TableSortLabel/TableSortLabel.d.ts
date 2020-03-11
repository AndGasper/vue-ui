import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TableSortLabelProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TableSortLabelClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TableSortLabelClasskey = [<classKey>];

declare const TableSortLabel: Vue.ComponentType<TableSortLabelProps>;

export default TableSortLabel;