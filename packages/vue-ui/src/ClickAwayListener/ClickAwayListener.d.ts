import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ClickAwayListenerProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ClickAwayListenerClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ClickAwayListenerClasskey = [<classKey>];

declare const ClickAwayListener: Vue.ComponentType<ClickAwayListenerProps>;

export default ClickAwayListener;