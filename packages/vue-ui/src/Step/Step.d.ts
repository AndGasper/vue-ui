import * as Vue from 'vue';
import { StandardProps } from '..';

export interface StepProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, StepClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type StepClasskey = [<classKey>];

declare const Step: Vue.ComponentType<StepProps>;

export default Step;