export type Direction = 'ltr' | 'rtl';

export interface ThemeOptions {
    direction?: Direction
}

export interface Theme {
    direction: Direction
}

export default function createVueUiTheme(options?: ThemeOptions, ...args: object[]): Theme;