import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  showEnv: () => ipcRenderer.invoke('show-env'),
})
