import * as Vue from 'vue';
import { StandardProps } from '..';

export interface InputProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, InputClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type InputClasskey = [<classKey>];

declare const Input: Vue.ComponentType<InputProps>;

export default Input;