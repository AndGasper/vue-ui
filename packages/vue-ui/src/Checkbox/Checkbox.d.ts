import * as Vue from 'vue';
import { StandardProps } from '..';

export interface CheckboxProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, CheckboxClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type CheckboxClasskey = [<classKey>];

declare const Checkbox: Vue.ComponentType<CheckboxProps>;

export default Checkbox;