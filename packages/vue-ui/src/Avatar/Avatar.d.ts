import * as Vue from 'vue';
import { StandardProps } from '..';

export interface AvatarProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, AvatarClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type AvatarClasskey = [<classKey>];

declare const Avatar: Vue.ComponentType<AvatarProps>;

export default Avatar;