import { Omit } from '@vue-ui/types';
import {
    CreateCSSProperties,
    StyledComponentProps,
    WithStylesOptions,
} from '@vue-ui/styles/withStyles';
import { Theme as DefaultTheme } from './createVueUiTheme';
import * as Vue from 'vue';

export type ComponentCreator<Component extends Vue.ElementTypes> = <Theme = DefaultTheme, Props extends {} = {}> (
    styles: | CreateCSSProperties<Props> | ((props: { theme:  Theme } & Props) => CreateCSSProperties<Props>),
    options?: WithStylesOptions<Theme>,
) => Vue.ComponentType<
    Omit<Vue.LibraryManagedAttributes<Component, Vue.ComponentProps<Component>>,'classes' | 'className'> 
    & 
    StyledComponentProps<'root'> & { className?: string } & (Props extends { theme: Theme } ? Omit<Props, 'theme'> & { theme?: Theme }: Props )
>; 

export interface StyledProps {
    className: string;
}

export default function styled<Component extends Vue.ElementType>(
    Component: Component,
): ComponentCreator<Component>;