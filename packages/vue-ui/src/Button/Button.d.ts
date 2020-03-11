import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ButtonProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ButtonClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ButtonClasskey = [<classKey>];

declare const Button: Vue.ComponentType<ButtonProps>;

export default Button;