import * as Vue from 'vue';
import { StandardProps } from '..';

export interface IconProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, IconClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type IconClasskey = [<classKey>];

declare const Icon: Vue.ComponentType<IconProps>;

export default Icon;