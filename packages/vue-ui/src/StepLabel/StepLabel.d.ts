import * as Vue from 'vue';
import { StandardProps } from '..';

export interface StepLabelProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, StepLabelClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type StepLabelClasskey = [<classKey>];

declare const StepLabel: Vue.ComponentType<StepLabelProps>;

export default StepLabel;