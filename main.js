const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800, // Wider to fit everything safely
        height: 600,
        frame: false,
        transparent: true,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html');
    
    // Fix taskbar icon
    const iconPath = path.join(__dirname, 'icon.png');
    win.setIcon(iconPath);

    ipcMain.on('app-close', () => win.close());
    ipcMain.on('app-minimize', () => win.minimize());
}

app.whenReady().then(createWindow);