import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'node:path'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: join(__dirname, '../preload/index.cjs'),
    },
  })
  mainWindow.removeMenu()
  mainWindow.maximize()
  mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.handle('show-env', () => {
  return { ...process.env }
})
