import * as Vue from 'vue';
import { StandardProps } from '..';

export interface SvgIconProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, SvgIconClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type SvgIconClasskey = [<classKey>];

declare const SvgIcon: Vue.ComponentType<SvgIconProps>;

export default SvgIcon;