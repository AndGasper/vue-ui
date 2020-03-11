import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TextFieldProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TextFieldClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TextFieldClasskey = [<classKey>];

declare const TextField: Vue.ComponentType<TextFieldProps>;

export default TextField;