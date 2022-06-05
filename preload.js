const { ipcRenderer } = require('electron')

process.once('loaded', () => {
  window.addEventListener('message', async (evt) => {
    console.log('preload', evt);
    if (evt.data.type === 'select-dirs') {
      ipcRenderer.send('select-dirs')
    }
    if (evt.data.type === 'select-dirs-handle') {
      const result = await ipcRenderer.invoke('select-dirs-handle');
      alert(result);
    }
  })
})

ipcRenderer.on('select-dirs-response', (event, args) => {
  alert(args);
});
