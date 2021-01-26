module.exports = (config) => {
  config.addPassthroughCopy({ 'static/src/assets': 'assets' })
  config.setBrowserSyncConfig({
    files: ['static/dist/**/*']
  })
  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'static/src/site',
      output: 'static/dist',
    },
  }
}
