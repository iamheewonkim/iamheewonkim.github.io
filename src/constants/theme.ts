import { DefaultTheme } from 'styled-components';

const APP = {
  theme_gradient: 'linear-gradient(72deg, #3494e6, #ec6ead)',
  top_header_text_color: '#fff',
};

const LIGHT_THEME = {
  blockquote_text_color: '#999',
  dimmed_color: '#eef5db',
  dark_gray: '#333',
  inline_dimmed_color: '#ece5f1',
  inline_text_color: '#4b2043',
  light_category_border_color: '#ecf0f2',
  light_category_highlight_border_color: '#3494e6',
  light_category_background_color: '#f4f7f8',
  light_category_text_color: '#666',
  light_category_highlight_text_color: '#636c6e',
  light_category_item_color: '#fff',
  light_background_color: '#fff',
  light_text_shadow: '0 0 0.1px rgba(0, 0, 0, 0.3)',
  light_hover_text_shadow: '0 0 6px rgba(0, 0, 0, 0.2)',
  light_link_color: '#000080',
  light_gray: '#aaa',
  middle_gray: '#7d7d7d',
  navigator_text_color: '#cc007a',
  navigator_background_color: '#fceff7',
};

const DARK_THEME = {
  dark_background_color: '#282c35',
  dark_category_item_color: '#282c35',
  dark_category_background_color: '#24272c',
  dark_category_border_color: 'rgb(56, 54, 54)',
  dark_category_text_color: '#d8d7d7',
  dark_category_highlight_border_color: '#ec6ead',
  dark_category_highlight_text_color: '#fff',
  dark_hover_text_shadow: '0 0 6px rgba(255, 255, 255, 0.2)',
  dark_link_color: '#bb72ec',
  dark_lightest_font_color: '#fff',
  dark_light_font_color: '#eeeeee',
  dark_middle_font_color: '#d8d7d7',
  dark_text_shadow: '0 0 0.1px rgba(255, 255, 255, 0.3)',
};

export type AppVariableTypes = typeof APP;
export type LightThemeTypes = typeof LIGHT_THEME;
export type DarkThemeTypes = typeof DARK_THEME;

export const theme = {
  APP,
  LIGHT_THEME,
  DARK_THEME,
};
