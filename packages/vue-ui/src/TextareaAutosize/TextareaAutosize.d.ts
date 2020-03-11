import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TextareaAutosizeProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TextareaAutosizeClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TextareaAutosizeClasskey = [<classKey>];

declare const TextareaAutosize: Vue.ComponentType<TextareaAutosizeProps>;

export default TextareaAutosize;