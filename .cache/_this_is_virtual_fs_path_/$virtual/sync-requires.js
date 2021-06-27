
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/omkar/webdev/Portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/omkar/webdev/Portfolio/src/pages/About.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/omkar/webdev/Portfolio/src/pages/Contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/omkar/webdev/Portfolio/src/pages/index.js")),
  "component---src-pages-project-js": preferDefault(require("/home/omkar/webdev/Portfolio/src/pages/Project.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/omkar/webdev/Portfolio/src/pages/using-typescript.tsx"))
}

