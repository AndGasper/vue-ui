import * as Vue from 'vue';
import { StandardProps } from '..';

export interface FabProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, FabClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type FabClasskey = [<classKey>];

declare const Fab: Vue.ComponentType<FabProps>;

export default Fab;