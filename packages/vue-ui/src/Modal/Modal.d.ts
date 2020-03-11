import * as Vue from 'vue';
import { StandardProps } from '..';

export interface ModalProps
	extends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ModalClassKey> {
	 component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;
	<morestuff>
}

export type ModalClasskey = [<classKey>];

declare const Modal: Vue.ComponentType<ModalProps>;

export default Modal;