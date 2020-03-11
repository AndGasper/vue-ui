import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ZoomProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ZoomClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ZoomClasskey = [<classKey>];

declare const Zoom: Vue.ComponentType<ZoomProps>;

export default Zoom;