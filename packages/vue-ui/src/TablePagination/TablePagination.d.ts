import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TablePaginationProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TablePaginationClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TablePaginationClasskey = [<classKey>];

declare const TablePagination: Vue.ComponentType<TablePaginationProps>;

export default TablePagination;