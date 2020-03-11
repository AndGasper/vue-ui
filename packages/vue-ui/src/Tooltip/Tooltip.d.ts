import * as Vue from 'vue';
import { StandardProps } from '..';

export interface TooltipProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, TooltipClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type TooltipClasskey = [<classKey>];

declare const Tooltip: Vue.ComponentType<TooltipProps>;

export default Tooltip;