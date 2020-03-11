import * as Vue from 'vue';
import { StandardProps } from '..';

export interface FilledInputProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, FilledInputClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type FilledInputClasskey = [<classKey>];

declare const FilledInput: Vue.ComponentType<FilledInputProps>;

export default FilledInput;