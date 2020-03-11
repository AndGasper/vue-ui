import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ListItemAvatarProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ListItemAvatarClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ListItemAvatarClasskey = [<classKey>];

declare const ListItemAvatar: Vue.ComponentType<ListItemAvatarProps>;

export default ListItemAvatar;