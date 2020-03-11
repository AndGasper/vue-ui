import * as Vue from 'vue';
import { StandardProps } from '..';

export interface StepConnectorProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, StepConnectorClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type StepConnectorClasskey = [<classKey>];

declare const StepConnector: Vue.ComponentType<StepConnectorProps>;

export default StepConnector;