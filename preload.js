const { ipcRenderer } = require('electron')

process.once('loaded', () => {
  window.addEventListener('message', evt => {
    console.log('preload', evt);
    if (evt.data.type === 'select-dirs') {
      ipcRenderer.send('select-dirs')
    }
  })
})

ipcRenderer.on('select-dirs-response', (event, args) => {
  alert(args);
});
