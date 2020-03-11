import * as Vue from 'vue';
import { StandardProps } from '..';

export interface GridListTileBarProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, GridListTileBarClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type GridListTileBarClasskey = [<classKey>];

declare const GridListTileBar: Vue.ComponentType<GridListTileBarProps>;

export default GridListTileBar;