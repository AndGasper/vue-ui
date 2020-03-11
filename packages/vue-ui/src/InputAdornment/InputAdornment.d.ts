import * as Vue from 'vue';
import { StandardProps } from '..';

export interface InputAdornmentProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, InputAdornmentClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type InputAdornmentClasskey = [<classKey>];

declare const InputAdornment: Vue.ComponentType<InputAdornmentProps>;

export default InputAdornment;