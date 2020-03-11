import * as Vue from 'vue';
import { StandardProps } from '..';

export interface GrowProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, GrowClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type GrowClasskey = [<classKey>];

declare const Grow: Vue.ComponentType<GrowProps>;

export default Grow;