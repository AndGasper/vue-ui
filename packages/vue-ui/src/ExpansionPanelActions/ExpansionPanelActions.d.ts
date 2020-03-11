import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ExpansionPanelActionsProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ExpansionPanelActionsClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ExpansionPanelActionsClasskey = [<classKey>];

declare const ExpansionPanelActions: Vue.ComponentType<ExpansionPanelActionsProps>;

export default ExpansionPanelActions;