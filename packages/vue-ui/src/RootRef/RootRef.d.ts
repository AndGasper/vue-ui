import * as Vue from 'vue';
import { StandardProps } from '..';

export interface RootRefProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, RootRefClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type RootRefClasskey = [<classKey>];

declare const RootRef: Vue.ComponentType<RootRefProps>;

export default RootRef;