import * as Vue from 'vue';
import { StandardProps } from '..';

export interface BoxProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, BoxClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type BoxClasskey = [<classKey>];

declare const Box: Vue.ComponentType<BoxProps>;

export default Box;