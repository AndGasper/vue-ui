import * as Vue from 'vue';
import { StandardProps } from '..';

export interface BackdropProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, BackdropClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type BackdropClasskey = [<classKey>];

declare const Backdrop: Vue.ComponentType<BackdropProps>;

export default Backdrop;