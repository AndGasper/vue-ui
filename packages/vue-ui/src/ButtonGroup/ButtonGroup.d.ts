import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ButtonGroupProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ButtonGroupClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ButtonGroupClasskey = [<classKey>];

declare const ButtonGroup: Vue.ComponentType<ButtonGroupProps>;

export default ButtonGroup;