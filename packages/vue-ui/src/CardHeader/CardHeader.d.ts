import * as Vue from 'vue';
import { StandardProps } from '..';

export interface CardHeaderProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, CardHeaderClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type CardHeaderClasskey = [<classKey>];

declare const CardHeader: Vue.ComponentType<CardHeaderProps>;

export default CardHeader;