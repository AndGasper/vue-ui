import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ExpansionPanelProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ExpansionPanelClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ExpansionPanelClasskey = [<classKey>];

declare const ExpansionPanel: Vue.ComponentType<ExpansionPanelProps>;

export default ExpansionPanel;