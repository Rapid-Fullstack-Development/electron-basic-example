const { app, BrowserWindow } = require('electron');

//
// Creates the browser window.
//
function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    // and load the index.html of the app.
    mainWindow.loadFile('index.html');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
}

// 
// Called when Electron has initialized.
//
app.whenReady().then(() => {
    createWindow();
});