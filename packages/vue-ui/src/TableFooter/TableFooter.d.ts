import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TableFooterProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TableFooterClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TableFooterClasskey = [<classKey>];

declare const TableFooter: Vue.ComponentType<TableFooterProps>;

export default TableFooter;