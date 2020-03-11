import * as Vue from 'vue';
import { StandardProps } from '..';

export interface FormHelperTextProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, FormHelperTextClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type FormHelperTextClasskey = [<classKey>];

declare const FormHelperText: Vue.ComponentType<FormHelperTextProps>;

export default FormHelperText;