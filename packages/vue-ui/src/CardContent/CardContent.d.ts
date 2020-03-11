import * as Vue from 'vue';
import { StandardProps } from '..';

export interface CardContentProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, CardContentClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type CardContentClasskey = [<classKey>];

declare const CardContent: Vue.ComponentType<CardContentProps>;

export default CardContent;