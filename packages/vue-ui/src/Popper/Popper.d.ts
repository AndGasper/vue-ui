import * as Vue from 'vue';
import { StandardProps } from '..';

export interface PopperProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, PopperClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type PopperClasskey = [<classKey>];

declare const Popper: Vue.ComponentType<PopperProps>;

export default Popper;