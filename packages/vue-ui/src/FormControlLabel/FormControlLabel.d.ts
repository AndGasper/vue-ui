import * as Vue from 'vue';
import { StandardProps } from '..';

export interface FormControlLabelProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, FormControlLabelClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type FormControlLabelClasskey = [<classKey>];

declare const FormControlLabel: Vue.ComponentType<FormControlLabelProps>;

export default FormControlLabel;