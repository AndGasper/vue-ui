import * as Vue from 'vue';
import { StandardProps } from '..';

export interface SwipeableDrawerProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, SwipeableDrawerClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type SwipeableDrawerClasskey = [<classKey>];

declare const SwipeableDrawer: Vue.ComponentType<SwipeableDrawerProps>;

export default SwipeableDrawer;