import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TableBodyProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TableBodyClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TableBodyClasskey = [<classKey>];

declare const TableBody: Vue.ComponentType<TableBodyProps>;

export default TableBody;