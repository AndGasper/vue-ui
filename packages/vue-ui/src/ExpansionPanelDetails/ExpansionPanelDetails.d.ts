import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ExpansionPanelDetailsProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ExpansionPanelDetailsClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ExpansionPanelDetailsClasskey = [<classKey>];

declare const ExpansionPanelDetails: Vue.ComponentType<ExpansionPanelDetailsProps>;

export default ExpansionPanelDetails;