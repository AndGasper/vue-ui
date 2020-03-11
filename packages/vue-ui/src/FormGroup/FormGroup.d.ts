import * as Vue from 'vue';
import { StandardProps } from '..';

export interface FormGroupProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, FormGroupClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type FormGroupClasskey = [<classKey>];

declare const FormGroup: Vue.ComponentType<FormGroupProps>;

export default FormGroup;