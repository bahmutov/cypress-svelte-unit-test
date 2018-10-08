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

export default function mount (Component, data, slots, store) {
  const html = `
    <div id="app"></div>
    `
  const document = cy.state('document')
  document.write(html)
  document.close()

  cy
    .window({ log: false })
    .then(setXMLHttpRequest)
    .then(setAlert)

  cy.get('#app', { log: false }).should('exist')
  return cy.document({ log: false }).then(doc => {
    Cypress.component = new Component({
      target: doc.getElementById('app'),
      data,
      slots,
      store
    })
    copyStyles(Component)
  })
}

// having weak reference to styles prevents garbage collection
// and "losing" styles when the next test starts
const stylesCache = new Map()

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

  const parentDocument = window.parent.document
  const projectName = Cypress.config('projectName')
  const appIframeId = `Your App: '${projectName}'`
  const appIframe = parentDocument.getElementById(appIframeId)
  const head = appIframe.contentDocument.querySelector('head')
  styles.forEach(style => {
    head.appendChild(style)
  })
}
