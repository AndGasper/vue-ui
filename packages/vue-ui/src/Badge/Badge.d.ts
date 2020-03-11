import * as Vue from 'vue';
import { StandardProps } from '..';

export interface BadgeProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, BadgeClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type BadgeClasskey = [<classKey>];

declare const Badge: Vue.ComponentType<BadgeProps>;

export default Badge;