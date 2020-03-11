import * as Vue from 'vue';
import { StandardProps } from '..';

export interface CssBaselineProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, CssBaselineClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type CssBaselineClasskey = [<classKey>];

declare const CssBaseline: Vue.ComponentType<CssBaselineProps>;

export default CssBaseline;