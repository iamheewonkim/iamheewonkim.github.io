import { THEME } from '../../constants'
import * as Dom from '../../utils/dom'

export const getTheme = checked => {
  return checked ? THEME.DARK : THEME.LIGHT
}

export const toggleTheme = theme => {
  switch (theme) {
    case THEME.LIGHT: {
      Dom.addClassToBody(THEME.LIGHT)
      Dom.removeClassToBody(THEME.DARK)
      break
    }
    case THEME.DARK: {
      Dom.addClassToBody(THEME.DARK)
      Dom.removeClassToBody(THEME.LIGHT)
      break
    }
  }
}
