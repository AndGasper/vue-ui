import * as Vue from 'vue';
import { StandardProps } from '..';

export interface CardActionsProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, CardActionsClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type CardActionsClasskey = [<classKey>];

declare const CardActions: Vue.ComponentType<CardActionsProps>;

export default CardActions;