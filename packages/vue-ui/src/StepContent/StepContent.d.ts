import * as Vue from 'vue';
import { StandardProps } from '..';

export interface StepContentProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, StepContentClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type StepContentClasskey = [<classKey>];

declare const StepContent: Vue.ComponentType<StepContentProps>;

export default StepContent;