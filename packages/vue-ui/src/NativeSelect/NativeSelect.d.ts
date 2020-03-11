import * as Vue from 'vue';
import { StandardProps } from '..';

export interface NativeSelectProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, NativeSelectClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type NativeSelectClasskey = [<classKey>];

declare const NativeSelect: Vue.ComponentType<NativeSelectProps>;

export default NativeSelect;