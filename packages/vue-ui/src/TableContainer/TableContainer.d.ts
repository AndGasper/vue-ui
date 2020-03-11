import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TableContainerProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TableContainerClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TableContainerClasskey = [<classKey>];

declare const TableContainer: Vue.ComponentType<TableContainerProps>;

export default TableContainer;