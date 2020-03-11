import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ListItemSecondaryActionProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ListItemSecondaryActionClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ListItemSecondaryActionClasskey = [<classKey>];

declare const ListItemSecondaryAction: Vue.ComponentType<ListItemSecondaryActionProps>;

export default ListItemSecondaryAction;