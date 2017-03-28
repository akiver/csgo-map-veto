import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'
import {enableLiveReload} from 'electron-compile'
import {app, BrowserWindow} from 'electron'
import path from 'path'
import url from 'url'
import is from 'electron-is'

let mainWindow

async function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    })
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.on('closed', function () {
        mainWindow = null
    })

    if (is.dev()) {
        await installExtension(REACT_DEVELOPER_TOOLS)
        await installExtension(REDUX_DEVTOOLS)
        mainWindow.webContents.openDevTools()
        enableLiveReload({strategy: 'react-hmr'})
    }
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', async function () {
    if (mainWindow === null) {
        await createWindow()
    }
})