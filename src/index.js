function setXMLHttpRequest (w) {
  // by grabbing the XMLHttpRequest from app's iframe
  // and putting it here - in the test iframe
  // we suddenly get spying and stubbing 😁
  window.XMLHttpRequest = w.XMLHttpRequest
  return w
}

function setAlert (w) {
  window.alert = w.alert
  return w
}

function setEventListeners (w) {
  window.addEventListener = w.addEventListener.bind(w)
  window.removeEventListener = w.removeEventListener.bind(w)
}

export default function mount (Component, options = {}, docOptions = {}) {
  const html = `
    <div id="app"></div>
    `
  const cyDocument = cy.state('document')
  cyDocument.write(html)
  cyDocument.close()

  document.addEventListener = cyDocument.addEventListener.bind(cyDocument)
  document.removeEventListener = cyDocument.removeEventListener.bind(cyDocument)

  cy
    .window({ log: false })
    .then(setXMLHttpRequest)
    .then(setAlert)
    .then(setEventListeners)

  cy.get('#app', { log: false }).should('exist')
  return cy.document({ log: false }).then(doc => {
    const allOptions = Object.assign({}, options, {
      target: doc.getElementById('app')
    })
    Cypress.component = new Component(allOptions)
    copyStyles(Component)

    if (docOptions.style) {
      addGlobalStyle(docOptions.style)
    }
  })
}

/**
 * Adds global CSS style.
 */
function addGlobalStyle (css) {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.appendChild(document.createTextNode(css))

  const appIframe = getAppIframe()
  const head = appIframe.contentDocument.querySelector('head')
  head.appendChild(style)
}

// having weak reference to styles prevents garbage collection
// and "losing" styles when the next test starts
const stylesCache = new Map()

function getAppIframe () {
  const parentDocument = window.parent.document
  const projectName = Cypress.config('projectName')
  const appIframeId = `Your App: '${projectName}'`
  const appIframe = parentDocument.getElementById(appIframeId)
  return appIframe
}

function copyStyles (component) {
  const hash = component

  let styles = document.querySelectorAll('head style')
  if (styles.length) {
    console.log('injected %d styles', styles.length)
    stylesCache.set(hash, styles)
  } else {
    console.log('No styles injected for this component, checking cache')
    if (stylesCache.has(hash)) {
      styles = stylesCache.get(hash)
    } else {
      styles = null
    }
  }

  if (!styles) {
    return
  }

  const appIframe = getAppIframe()
  const head = appIframe.contentDocument.querySelector('head')
  styles.forEach(style => {
    head.appendChild(style)
  })
}
