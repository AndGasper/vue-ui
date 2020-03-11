import * as Vue from 'vue';
import { StandardProps } from '..';

export interface CardActionAreaProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, CardActionAreaClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type CardActionAreaClasskey = [<classKey>];

declare const CardActionArea: Vue.ComponentType<CardActionAreaProps>;

export default CardActionArea;