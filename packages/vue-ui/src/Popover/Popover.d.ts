import * as Vue from 'vue';
import { StandardProps } from '..';

export interface PopoverProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, PopoverClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type PopoverClasskey = [<classKey>];

declare const Popover: Vue.ComponentType<PopoverProps>;

export default Popover;