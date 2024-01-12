;(async () => {
  // MacOS 上红绿灯默认在标题栏左侧，因此需要将窗口标题文字让开以避免遮挡，这里设为居中。
  // 需要注意这里使用了 electron-vite 框架，如果你没有使用该框架，可在 Node 后端将 process.platform 传递给前端进行判断。
  // 'darwin' 代表 MacOS
  if (window.electron.platform === 'darwin') {
    document.querySelector('.custom-titlebar').classList.add('darwin')
  }
  if (window.electron.platform === 'linux') {
    document.querySelector('.custom-titlebar').classList.add('linux')
  }
})()
