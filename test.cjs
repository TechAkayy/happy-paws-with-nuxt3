const path = require('path')
const glob = require('glob')
const fs = require('fs')
// options is optional
glob('**/package.json', {
  cwd: path.resolve(process.cwd(),'node_modules')
}, function (er, files) {
  // console.log(files)
	// files is an array of filenames.
	// If the `nonull` option is set, and nothing
	// was found, then files is ["**/*.js"]
	// er is an error object or null.
  const filesWithWebTypes = []
  files.forEach((file) => {
    const filePath = path.resolve(process.cwd(), 'node_modules', file)
    if (fs.readFileSync(filePath).includes('web-types')) {
			filesWithWebTypes.push(filePath)
		}
  })
  console.log(filesWithWebTypes)
})
