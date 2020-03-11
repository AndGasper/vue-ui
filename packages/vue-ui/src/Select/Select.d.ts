import * as Vue from 'vue';
import { StandardProps } from '..';

export interface SelectProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, SelectClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type SelectClasskey = [<classKey>];

declare const Select: Vue.ComponentType<SelectProps>;

export default Select;