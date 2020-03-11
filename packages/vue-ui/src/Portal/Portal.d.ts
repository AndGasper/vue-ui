import * as Vue from 'vue';
import { StandardProps } from '..';

export interface PortalProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, PortalClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type PortalClasskey = [<classKey>];

declare const Portal: Vue.ComponentType<PortalProps>;

export default Portal;