import * as Vue from 'vue';
import { StandardProps } from '..';

export interface StepperProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, StepperClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type StepperClasskey = [<classKey>];

declare const Stepper: Vue.ComponentType<StepperProps>;

export default Stepper;