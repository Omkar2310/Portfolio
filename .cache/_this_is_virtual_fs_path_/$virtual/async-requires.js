// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/About.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/Contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-project-js": () => import("./../../../src/pages/Project.js" /* webpackChunkName: "component---src-pages-project-js" */),
  "component---src-pages-using-typescript-tsx": () => import("./../../../src/pages/using-typescript.tsx" /* webpackChunkName: "component---src-pages-using-typescript-tsx" */)
}

