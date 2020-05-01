import {
  checkMountModeEnabled,
  cleanupStyles,
  injectStylesBeforeElement,
} from './utils'

const rootId = 'cypress-root'

/**
 * Additional styles to inject into the document.
 * A component might need 3rd party libraries from CDN,
 * local CSS files and custom styles.
 */
export interface StyleOptions {
  /**
   * Creates <link href="..." /> element for each stylesheet
   * @alias stylesheet
   */
  stylesheets: string | string[]
  /**
   * Creates <link href="..." /> element for each stylesheet
   * @alias stylesheets
   */
  stylesheet: string | string[]
  /**
   * Creates <style>...</style> element and inserts given CSS.
   * @alias styles
   */
  style: string | string[]
  /**
   * Creates <style>...</style> element for each given CSS text.
   * @alias style
   */
  styles: string | string[]
  /**
   * Loads each file and creates a <style>...</style> element
   * with the loaded CSS
   * @alias cssFile
   */
  cssFiles: string | string[]
  /**
   * Single CSS file to load into a <style></style> element
   * @alias cssFile
   */
  cssFile: string | string[]
}

export function mount(
  Component: any,
  options = {},
  styleOptions: Partial<StyleOptions> = {},
) {
  checkMountModeEnabled()

  return cy.then(() => {
    // @ts-ignore
    const document = cy.state('document')
    cleanupStyles(document)

    let el = document.getElementById(rootId)
    if (el) {
      while (el.firstChild) {
        el.removeChild(el.firstChild)
      }
    } else {
      el = document.createElement('div')
      el.setAttribute('id', rootId)
      document.getElementsByTagName('body')[0].prepend(el)
    }
    injectStylesBeforeElement(styleOptions, document, el)

    const allOptions = Object.assign({}, options, {
      target: el,
    })

    const component = new Component(allOptions)
    return cy.wrap(component)
  })
}

export default mount
