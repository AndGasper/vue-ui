import * as Vue from 'vue';
import { StandardProps } from '..';

export interface FormLabelProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, FormLabelClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type FormLabelClasskey = [<classKey>];

declare const FormLabel: Vue.ComponentType<FormLabelProps>;

export default FormLabel;