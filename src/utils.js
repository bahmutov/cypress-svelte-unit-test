export function checkMountModeEnabled () {
  // @ts-ignore
  if (Cypress.spec.specType !== 'component') {
    throw new Error(
      `In order to use mount or unmount functions please place the spec in component folder`
    )
  }
}

/**
 * Remove any style or extra link elements from the iframe placeholder
 * left from any previous test
 */
export function cleanupStyles (document) {
  const styles = document.body.querySelectorAll('style')
  styles.forEach(styleElement => {
    document.body.removeChild(styleElement)
  })

  const links = document.body.querySelectorAll('link[rel=stylesheet]')
  links.forEach(link => {
    document.body.removeChild(link)
  })
}
