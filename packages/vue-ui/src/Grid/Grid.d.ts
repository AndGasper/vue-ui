import * as Vue from 'vue';
import { StandardProps } from '..';

export interface GridProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, GridClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type GridClasskey = [<classKey>];

declare const Grid: Vue.ComponentType<GridProps>;

export default Grid;