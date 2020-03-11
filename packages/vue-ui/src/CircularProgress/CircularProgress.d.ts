import * as Vue from 'vue';
import { StandardProps } from '..';

export interface CircularProgressProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, CircularProgressClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type CircularProgressClasskey = [<classKey>];

declare const CircularProgress: Vue.ComponentType<CircularProgressProps>;

export default CircularProgress;