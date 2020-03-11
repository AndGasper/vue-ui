import * as Vue from 'vue';
import { StandardProps } from '..';

export interface GridListTileProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, GridListTileClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type GridListTileClasskey = [<classKey>];

declare const GridListTile: Vue.ComponentType<GridListTileProps>;

export default GridListTile;