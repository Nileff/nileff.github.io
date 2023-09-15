const messageImg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTgsMjAuMmgtNC44bC01LjMsMy42Yy0wLjgsMC41LTEuOSwwLTEuOS0xdi0yLjZjLTMuNiwwLTYtMi40LTYtNlY3YzAtMy42LDIuNC02LDYtNmgxMmMzLjYsMCw2LDIuNCw2LDZ2Ny4yDQoJQzI0LDE3LjgsMjEuNiwyMC4yLDE4LDIwLjJ6Ii8+DQo8cGF0aCBmaWxsPSIjMDAyQzU0IiBkPSJNMTIsMTIuN2MtMC41LDAtMC45LTAuNC0wLjktMC45di0wLjNjMC0xLjQsMS0yLjEsMS40LTIuM2MwLjQtMC4zLDAuNi0wLjUsMC42LTAuOGMwLTAuNi0wLjUtMS4xLTEuMS0xLjENCglzLTEuMSwwLjUtMS4xLDEuMWMwLDAuNS0wLjQsMC45LTAuOSwwLjljLTAuNSwwLTAuOS0wLjQtMC45LTAuOWMwLTEuNiwxLjMtMi45LDIuOS0yLjlzMi45LDEuMywyLjksMi45YzAsMS40LTEsMi4xLTEuNCwyLjMNCgljLTAuNSwwLjMtMC42LDAuNS0wLjYsMC45djAuM0MxMi45LDEyLjMsMTIuNSwxMi43LDEyLDEyLjd6Ii8+DQo8cGF0aCBmaWxsPSIjMDAyQzU0IiBkPSJNMTIsMTUuNmMtMC41LDAtMC45LTAuNC0wLjktMC45YzAtMC41LDAuNC0wLjksMC45LTAuOXMwLjksMC40LDAuOSwwLjlDMTIuOSwxNS4yLDEyLjUsMTUuNiwxMiwxNS42eiIvPg0KPC9zdmc+DQo="
const closeImg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgODAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjQTBBMEEwIiBkPSJNMjIuNCAyMi40YzI5LjgtMjkuOCA3OC4yLTI5LjggMTA4IDBsMjcwLjEgMjcwLjFMNjcwLjYgMjIuNGMzMC4zLTI5LjMgNzguNy0yOC41IDEwOCAxLjkgMjguNiAyOS42IDI4LjYgNzYuNSAwIDEwNi4xTDUwOC41IDQwMC41bDI3MC4xIDI3MC4xYzI5LjMgMzAuMyAyOC41IDc4LjctMS45IDEwOC0yOS42IDI4LjYtNzYuNSAyOC42LTEwNi4xIDBMNDAwLjUgNTA4LjUgMTMwLjQgNzc4LjZjLTMwLjMgMjkuMy03OC43IDI4LjUtMTA4LTEuOS0yOC42LTI5LjYtMjguNi03Ni41IDAtMTA2LjFsMjcwLjEtMjcwLjFMMjIuNCAxMzAuNGMtMjkuOS0yOS45LTI5LjktNzguMiAwLTEwOHoiLz48L3N2Zz4="
const sendImg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgODUwIDg1MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo3MjtzdHJva2UtbGluZWNhcDpyb3VuZDt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY5NS43LDk2LjljMzUuNy0xMC4yLDY4LjYsMjIuOCw1OC40LDU4LjRMNTgyLjIsNzU2LjljLTE4LjQsNjQuNS0xMDQuNSw3Ni42LTE0MCwxOS43TDMyMiw1ODMuOA0KCQljLTEzLjktMjIuMi0zMi42LTQxLTU0LjktNTQuOUw3NC40LDQwOC44Yy01Ni45LTM1LjUtNDQuOC0xMjEuNiwxOS43LTE0MEw2OTUuNyw5Ni45eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMjEuNyw1MjkuM2wxNTEuOS0xNTEuOSIvPg0KPC9nPg0KPC9zdmc+DQo="

window.onload = () => {
  const style = document.createElement('link')
  style.rel='stylesheet'
  style.href='/index.css'
  document.head.append(style)

  const widget = document.createElement('div')
  widget.className = 'gptChatWidget'
  document.body.append(widget)

  const openChat = () => {
    widget.classList.add('gptChatWidget_openChat')
  }

  const closeChat = () => {
    widget.classList.remove('gptChatWidget_openChat')
  }

  const startButton = document.createElement('button')
  startButton.className = 'gptChatWidget_button gptChatWidget_startButton'
  startButton.addEventListener('click', openChat)
  widget.append(startButton)

  const startButtonImg = document.createElement('img')
  startButtonImg.src = messageImg
  startButtonImg.alt = '?'
  startButton.append(startButtonImg)

  const chatWindow = document.createElement('div')
  chatWindow.className = 'gptChatWidget_chatWindow'
  setTimeout(() => {
    chatWindow.classList.add('gptChatWidget_chatWindowLoaded')
  }, 200)
  widget.append(chatWindow)

  const chatHeader = document.createElement('div')
  chatHeader.className = 'gptChatWidget_chatHeader'
  chatWindow.append(chatHeader)

  const chatTitle = document.createElement('span')
  chatTitle.innerText = 'Напишите нам'
  chatHeader.append(chatTitle)

  const closeButtonImg = document.createElement('img')
  closeButtonImg.src = closeImg
  closeButtonImg.alt = 'X'
  closeButtonImg.addEventListener('click', closeChat)
  chatHeader.append(closeButtonImg)

  const chatMessages = document.createElement('div')
  chatMessages.className = 'gptChatWidget_chatMessages'
  chatWindow.append(chatMessages)

  const initMessages = [
    {
      from: 'bot',
      message: 'Привет'
    },
    {
      from: 'user',
      message: 'Привет'
    },
    {
      from: 'bot',
      message: 'Как дела?'
    },
    {
      from: 'user',
      message: 'Жить буду'
    },
    {
      from: 'bot',
      message: 'Ок'
    },
    {
      from: 'user',
      message: 'А ты?'
    },
    {
      from: 'bot',
      message: 'Съешь ещё этих мягких французских булок, да выпей же чаю'
    },
    {
      from: 'user',
      message: 'Спасибо'
    },
    {
      from: 'bot',
      message: 'Пока'
    },
    {
      from: 'user',
      message: 'Пока'
    },
  ]

  initMessages.forEach(item => {
    const chatMessage = document.createElement('div')
    chatMessage.classList.add('gptChatWidget_chatMessage')
    chatMessage.classList.add(item.from === 'bot' ? 'gptChatWidget_chatMessageBot' : 'gptChatWidget_chatMessageUser')
    chatMessage.innerText = item.message
    chatMessages.append(chatMessage)
  })

  const chatFooter = document.createElement('div')
  chatFooter.className = 'gptChatWidget_chatFooter'
  chatWindow.append(chatFooter)

  const changeTextAreaSize = e => {
    const style = window.getComputedStyle(e.target)
    const lineHeight = Number.parseInt(style.lineHeight)
    shadowTextarea.style.width = style.width
    shadowTextarea.style.height = style.height
    shadowTextarea.value = e.target.value
    let height = shadowTextarea.scrollHeight
    if (height > lineHeight * 5) {
      height =lineHeight * 5
    }
    e.target.style.height = `${height}px`
  }

  const mainTextarea = document.createElement('textarea')
  mainTextarea.addEventListener('input', changeTextAreaSize)
  chatFooter.append(mainTextarea)

  const shadowTextarea = document.createElement('textarea')
  shadowTextarea.className = 'gptChatWidget_shadowTextarea'
  chatFooter.append(shadowTextarea)

  const sendButton = document.createElement('button')
  sendButton.className = 'gptChatWidget_button gptChatWidget_sendButton'
  sendButton.addEventListener('click', openChat)
  chatFooter.append(sendButton)

  const sendButtonImg = document.createElement('img')
  sendButtonImg.src = sendImg
  sendButtonImg.alt = 'send'
  sendButton.append(sendButtonImg)
}