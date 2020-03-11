import * as Vue from 'vue';
import { StandardProps } from '..';

export interface CardProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, CardClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type CardClasskey = [<classKey>];

declare const Card: Vue.ComponentType<CardProps>;

export default Card;