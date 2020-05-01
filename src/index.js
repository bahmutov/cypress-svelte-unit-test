import { checkMountModeEnabled, cleanupStyles } from './utils'

const rootId = 'cypress-root'

// function setXMLHttpRequest (w) {
//   // by grabbing the XMLHttpRequest from app's iframe
//   // and putting it here - in the test iframe
//   // we suddenly get spying and stubbing 😁
//   window.XMLHttpRequest = w.XMLHttpRequest
//   return w
// }

// function setAlert (w) {
//   window.alert = w.alert
//   return w
// }

export function mount (Component, options = {}, docOptions = {}) {
  checkMountModeEnabled()

  return cy.then(() => {
    const document = cy.state('document')
    cleanupStyles(document)

    let el = document.getElementById(rootId)
    if (el) {
      while (el.firstChild) {
        el.removeChild(el.firstChild)
      }
    }
    el = document.createElement('div')
    el.setAttribute('id', rootId)
    document.getElementsByTagName('body')[0].prepend(el)

    const allOptions = Object.assign({}, options, {
      target: el
    })
    Cypress.component = new Component(allOptions)
  })

  // const html = `
  //   <div id="app"></div>
  //   `
  // const document = cy.state('document')
  // document.write(html)
  // document.close()

  // cy
  //   .window({ log: false })
  //   .then(setXMLHttpRequest)
  //   .then(setAlert)

  // cy.get('#app', { log: false }).should('exist')
  // return cy.document({ log: false }).then(doc => {
  //   const allOptions = Object.assign({}, options, {
  //     target: doc.getElementById('app')
  //   })
  //   Cypress.component = new Component(allOptions)
  //   copyStyles(Component)

  //   if (docOptions.style) {
  //     addGlobalStyle(docOptions.style)
  //   }
  // })
}

/**
 * Adds global CSS style.
 */
// function addGlobalStyle (css) {
//   const style = document.createElement('style')
//   style.type = 'text/css'
//   style.appendChild(document.createTextNode(css))

//   const appIframe = getAppIframe()
//   const head = appIframe.contentDocument.querySelector('head')
//   head.appendChild(style)
// }

// // having weak reference to styles prevents garbage collection
// // and "losing" styles when the next test starts
// const stylesCache = new Map()

// function getAppIframe () {
//   const parentDocument = window.parent.document
//   const projectName = Cypress.config('projectName')
//   const appIframeId = `Your App: '${projectName}'`
//   const appIframe = parentDocument.getElementById(appIframeId)
//   return appIframe
// }

// function copyStyles (component) {
//   const hash = component

//   let styles = document.querySelectorAll('head style')
//   if (styles.length) {
//     console.log('injected %d styles', styles.length)
//     stylesCache.set(hash, styles)
//   } else {
//     console.log('No styles injected for this component, checking cache')
//     if (stylesCache.has(hash)) {
//       styles = stylesCache.get(hash)
//     } else {
//       styles = null
//     }
//   }

//   if (!styles) {
//     return
//   }

//   const appIframe = getAppIframe()
//   const head = appIframe.contentDocument.querySelector('head')
//   styles.forEach(style => {
//     head.appendChild(style)
//   })
// }

export default mount
