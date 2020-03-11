import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ExpansionPanelSummaryProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ExpansionPanelSummaryClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ExpansionPanelSummaryClasskey = [<classKey>];

declare const ExpansionPanelSummary: Vue.ComponentType<ExpansionPanelSummaryProps>;

export default ExpansionPanelSummary;