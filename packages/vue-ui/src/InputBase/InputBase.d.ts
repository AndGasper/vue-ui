import * as Vue from 'vue';
import { StandardProps } from '..';

export interface InputBaseProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, InputBaseClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type InputBaseClasskey = [<classKey>];

declare const InputBase: Vue.ComponentType<InputBaseProps>;

export default InputBase;