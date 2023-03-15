const vite = require('vite')
const { createServer, loadConfigFromFile } = vite

function init() {
	createServer({
		// any valid user config options, plus `mode` and `configFile`
		configFile: './vite.config.js',
		root: __dirname,
		server: {
			port: 1337
		}
	}).then((server) => {
		server.listen().then(() => {
			server.printUrls()
		})
	})
}

init()

module.exports = init
