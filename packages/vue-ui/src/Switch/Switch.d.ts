import * as Vue from 'vue';
import { StandardProps } from '..';

export interface SwitchProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, SwitchClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type SwitchClasskey = [<classKey>];

declare const Switch: Vue.ComponentType<SwitchProps>;

export default Switch;