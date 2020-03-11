import * as Vue from 'vue';
import { StandardProps } from '..';

export interface MobileStepperProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, MobileStepperClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type MobileStepperClasskey = [<classKey>];

declare const MobileStepper: Vue.ComponentType<MobileStepperProps>;

export default MobileStepper;