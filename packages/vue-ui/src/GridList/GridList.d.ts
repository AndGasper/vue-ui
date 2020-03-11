import * as Vue from 'vue';
import { StandardProps } from '..';

export interface GridListProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, GridListClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type GridListClasskey = [<classKey>];

declare const GridList: Vue.ComponentType<GridListProps>;

export default GridList;