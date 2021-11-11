import { StyleOptions } from '.'
import unfetch from 'unfetch'

export function checkMountModeEnabled() {
  // @ts-ignore
  const specType = Cypress?.spec?.specType // this will be present for cypress@6.x, but not for cypress@7.x
  if (specType != null && specType !== 'component') {
    throw new Error(
      `In order to use mount or unmount functions please place the spec in component folder`,
    )
  }
}

/**
 * Remove any style or extra link elements from the iframe placeholder
 * left from any previous test
 */
export function cleanupStyles(document: Document) {
  const styles = document.querySelectorAll('body > style')
  styles.forEach((styleElement) => {
    document.body.removeChild(styleElement)
  })

  const links = document.body.querySelectorAll('link[rel=stylesheet]')
  links.forEach((link) => {
    document.body.removeChild(link)
  })
}

/**
 * Insert links to external style resources.
 */
function insertStylesheets(
  stylesheets: string[],
  document: Document,
  el: HTMLElement,
) {
  stylesheets.forEach((href) => {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = href
    document.body.insertBefore(link, el)
  })
}

/**
 * Inserts a single stylesheet element
 */
function insertStyles(styles: string[], document: Document, el: HTMLElement) {
  styles.forEach((style) => {
    const styleElement = document.createElement('style')
    styleElement.appendChild(document.createTextNode(style))
    document.body.insertBefore(styleElement, el)
  })
}

function insertSingleCssFile(
  cssFilename: string,
  document: Document,
  el: HTMLElement,
  log?: boolean,
) {
  return cy.readFile(cssFilename, { log }).then((css) => {
    const style = document.createElement('style')
    style.appendChild(document.createTextNode(css))
    document.body.insertBefore(style, el)
  })
}

/**
 * Reads the given CSS file from local file system
 * and adds the loaded style text as an element.
 */
function insertLocalCssFiles(
  cssFilenames: string[],
  document: Document,
  el: HTMLElement,
  log?: boolean,
) {
  return Cypress.Promise.mapSeries(cssFilenames, (cssFilename) =>
    insertSingleCssFile(cssFilename, document, el, log),
  )
}

/**
 * Injects custom style text or CSS file or 3rd party style resources
 * into the given document.
 */
export const injectStylesBeforeElement = (
  options: Partial<StyleOptions & { log: boolean }>,
  document: Document,
  el: HTMLElement,
) => {
  // first insert all stylesheets as Link elements
  let stylesheets: string[] = []

  if (typeof options.stylesheet === 'string') {
    stylesheets.push(options.stylesheet)
  } else if (Array.isArray(options.stylesheet)) {
    stylesheets = stylesheets.concat(options.stylesheet)
  }

  if (typeof options.stylesheets === 'string') {
    options.stylesheets = [options.stylesheets]
  }
  if (options.stylesheets) {
    stylesheets = stylesheets.concat(options.stylesheets)
  }

  insertStylesheets(stylesheets, document, el)

  // insert any styles as <style>...</style> elements
  let styles: string[] = []
  if (typeof options.style === 'string') {
    styles.push(options.style)
  } else if (Array.isArray(options.style)) {
    styles = styles.concat(options.style)
  }
  if (typeof options.styles === 'string') {
    styles.push(options.styles)
  } else if (Array.isArray(options.styles)) {
    styles = styles.concat(options.styles)
  }

  insertStyles(styles, document, el)

  // now load any css files by path and add their content
  // as <style>...</style> elements
  let cssFiles: string[] = []

  if (typeof options.cssFile === 'string') {
    cssFiles.push(options.cssFile)
  } else if (Array.isArray(options.cssFile)) {
    cssFiles = cssFiles.concat(options.cssFile)
  }

  if (typeof options.cssFiles === 'string') {
    cssFiles.push(options.cssFiles)
  } else if (Array.isArray(options.cssFiles)) {
    cssFiles = cssFiles.concat(options.cssFiles)
  }

  return insertLocalCssFiles(cssFiles, document, el, options.log)
}

/**
 * Replaces window.fetch with a polyfill based on XMLHttpRequest
 * that Cypress can spy on and stub
 * @see https://www.cypress.io/blog/2020/06/29/experimental-fetch-polyfill/
 */
export function polyfillFetchIfNeeded() {
  // @ts-ignore
  if (Cypress.config('experimentalFetchPolyfill')) {
    // @ts-ignore
    if (!cy.state('fetchPolyfilled')) {
      delete window.fetch
      window.fetch = unfetch
      // @ts-ignore
      cy.state('fetchPolyfilled', true)
    }
  }
}
