import * as Vue from 'vue';
import { StandardProps } from '..';

export interface FormControlProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, FormControlClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type FormControlClasskey = [<classKey>];

declare const FormControl: Vue.ComponentType<FormControlProps>;

export default FormControl;