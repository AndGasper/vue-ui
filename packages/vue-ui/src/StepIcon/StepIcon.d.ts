import * as Vue from 'vue';
import { StandardProps } from '..';

export interface StepIconProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, StepIconClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type StepIconClasskey = [<classKey>];

declare const StepIcon: Vue.ComponentType<StepIconProps>;

export default StepIcon;