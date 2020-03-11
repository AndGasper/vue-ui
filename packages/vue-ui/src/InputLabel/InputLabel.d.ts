import * as Vue from 'vue';
import { StandardProps } from '..';

export interface InputLabelProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, InputLabelClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type InputLabelClasskey = [<classKey>];

declare const InputLabel: Vue.ComponentType<InputLabelProps>;

export default InputLabel;