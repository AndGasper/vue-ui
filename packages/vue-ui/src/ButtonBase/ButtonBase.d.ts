import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ButtonBaseProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ButtonBaseClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ButtonBaseClasskey = [<classKey>];

declare const ButtonBase: Vue.ComponentType<ButtonBaseProps>;

export default ButtonBase;