import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ScopedCssBaselineProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ScopedCssBaselineClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ScopedCssBaselineClasskey = [<classKey>];

declare const ScopedCssBaseline: Vue.ComponentType<ScopedCssBaselineProps>;

export default ScopedCssBaseline;