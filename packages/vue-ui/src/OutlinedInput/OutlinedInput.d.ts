import * as Vue from 'vue';
import { StandardProps } from '..';

export interface OutlinedInputProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, OutlinedInputClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type OutlinedInputClasskey = [<classKey>];

declare const OutlinedInput: Vue.ComponentType<OutlinedInputProps>;

export default OutlinedInput;