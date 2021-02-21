const fs = require('fs')
const path = require('path')

const postcss  = require('postcss')
const cssnano  = require('cssnano')
const atImport = require("postcss-import")
const posthtml = require('posthtml')
const htmlnano = require('htmlnano')

require = require("esm")(module)


const dist = path.join(__dirname, 'dist')
if (!fs.existsSync(dist)){
  fs.mkdirSync(dist);
}


// Process css
fs.readFile('src/style.css', (err, css) => {
  postcss([atImport, cssnano])
    .process(css, { from: 'src/style.css', to: 'dist/style.css' })
    .then(result => {
      fs.writeFile('dist/style.css', result.css, () => true)
    })
})


// Process html
posthtml()
  .use(require('posthtml-expressions')({
    locals: require(path.join(__dirname,'src', './locals.js'))
  }), htmlnano())
  .process(fs.readFileSync(path.join(__dirname, 'src','template.html'), "utf8"))
  .then((result) => fs.writeFileSync(path.join(path.dirname(__dirname), 'index.html'), result.html))










