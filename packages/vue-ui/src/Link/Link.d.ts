import * as Vue from 'vue';
import { StandardProps } from '..';

export interface LinkProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, LinkClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type LinkClasskey = [<classKey>];

declare const Link: Vue.ComponentType<LinkProps>;

export default Link;