import * as Vue from 'vue';
import { StandardProps } from '..';

export interface RadioProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, RadioClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type RadioClasskey = [<classKey>];

declare const Radio: Vue.ComponentType<RadioProps>;

export default Radio;