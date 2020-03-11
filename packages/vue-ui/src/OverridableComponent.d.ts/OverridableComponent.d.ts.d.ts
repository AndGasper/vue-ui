import * as Vue from 'vue';
import { StandardProps } from '..';

export interface OverridableComponent.d.tsProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, OverridableComponent.d.tsClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type OverridableComponent.d.tsClasskey = [<classKey>];

declare const OverridableComponent.d.ts: Vue.ComponentType<OverridableComponent.d.tsProps>;

export default OverridableComponent.d.ts;