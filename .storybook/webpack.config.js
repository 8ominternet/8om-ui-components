var config = require('create-nwb-webpack-config')()

// We need to filter out any chunking plugins, and also the HtmlWebpackPlugin as it conflicts.
config.plugins = config.plugins.filter(function(plugin) {
  // remove uglify js plugin
  if (plugin.options && plugin.options.sourceMap) {
    return false
  }
  return !plugin.chunkNames && !(plugin.options && plugin.options.template)
})

console.log(config.plugins)

module.exports = config
