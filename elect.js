// ./main.js
// electron 을 사용할거다.
const {app, BrowserWindow} = require('electron')

let win = null;

//3개의 listener 를 등록한다. 중요한건 ‘ready’ 이다. url 이나 파일을 entry point 로 적용한다.

app.on('ready', function () {

    // Initialize the window to our specified dimensions
    win = new BrowserWindow({width: 1000, height: 600});

    // Specify entry point to default entry point of vue.js
    win.loadURL('http://localhost:8080');

    // Remove window once app is closed
    win.on('closed', function () {
        win = null;
    });
});

//create the application window if the window variable is null
app.on('activate', () => {
if (win === null) {
createWindow()
}
})
//quit the app once closed
app.on('window-all-closed', function () {
if (process.platform != 'darwin') {
app.quit();
}
});