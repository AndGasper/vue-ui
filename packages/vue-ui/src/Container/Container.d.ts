import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ContainerProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ContainerClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ContainerClasskey = [<classKey>];

declare const Container: Vue.ComponentType<ContainerProps>;

export default Container;