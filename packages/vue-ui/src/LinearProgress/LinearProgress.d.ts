import * as Vue from 'vue';
import { StandardProps } from '..';

export interface LinearProgressProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, LinearProgressClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type LinearProgressClasskey = [<classKey>];

declare const LinearProgress: Vue.ComponentType<LinearProgressProps>;

export default LinearProgress;