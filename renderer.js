// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

document.getElementById('dirs').addEventListener('click', (evt) => {
  evt.preventDefault()
  window.postMessage({
    type: 'select-dirs',
  })
})

document.getElementById('dirs-handle').addEventListener('click', (evt) => {
  evt.preventDefault()
  window.postMessage({
    type: 'select-dirs-handle',
  })
})

window.addEventListener('select-dirs-response', evt => {
  alert(evt.data);
});
