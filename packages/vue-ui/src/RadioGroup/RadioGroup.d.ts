import * as Vue from 'vue';
import { StandardProps } from '..';

export interface RadioGroupProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, RadioGroupClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type RadioGroupClasskey = [<classKey>];

declare const RadioGroup: Vue.ComponentType<RadioGroupProps>;

export default RadioGroup;