import * as Vue from 'vue';
import { StandardProps } from '..';

export interface CardMediaProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, CardMediaClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type CardMediaClasskey = [<classKey>];

declare const CardMedia: Vue.ComponentType<CardMediaProps>;

export default CardMedia;