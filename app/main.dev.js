import {app, BrowserWindow} from 'electron'

let mainWindow

async function createWindow() {

    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`)

    mainWindow.webContents.on('did-finish-load', () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined')
        }
        mainWindow.show()
        mainWindow.focus()
    })

    mainWindow.on('closed', function () {
        mainWindow = null
    })

    if (process.env.NODE_ENV === 'development') {
        await installExtensions()
        mainWindow.webContents.openDevTools()
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

const installExtensions = async () => {
    const installer = require('electron-devtools-installer')

    const extensions = [
        'REACT_DEVELOPER_TOOLS',
        'REDUX_DEVTOOLS'
    ]

    return Promise
        .all(extensions.map(name => installer.default(installer[name])))
        .catch(console.log)
}