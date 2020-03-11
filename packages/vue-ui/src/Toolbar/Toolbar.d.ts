import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ToolbarProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ToolbarClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ToolbarClasskey = [<classKey>];

declare const Toolbar: Vue.ComponentType<ToolbarProps>;

export default Toolbar;