import * as Vue from 'vue';
import { StandardProps } from '..';

export interface IconButtonProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, IconButtonClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type IconButtonClasskey = [<classKey>];

declare const IconButton: Vue.ComponentType<IconButtonProps>;

export default IconButton;