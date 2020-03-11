import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TableHeadProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TableHeadClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TableHeadClasskey = [<classKey>];

declare const TableHead: Vue.ComponentType<TableHeadProps>;

export default TableHead;