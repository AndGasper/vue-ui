import * as Vue from 'vue';
import { StandardProps } from '..';

export interface StepButtonProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, StepButtonClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type StepButtonClasskey = [<classKey>];

declare const StepButton: Vue.ComponentType<StepButtonProps>;

export default StepButton;