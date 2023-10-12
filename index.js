const messageImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTgsMjAuMmgtNC44bC01LjMsMy42Yy0wLjgsMC41LTEuOSwwLTEuOS0xdi0yLjZjLTMuNiwwLTYtMi40LTYtNlY3YzAtMy42LDIuNC02LDYtNmgxMmMzLjYsMCw2LDIuNCw2LDZ2Ny4yDQoJQzI0LDE3LjgsMjEuNiwyMC4yLDE4LDIwLjJ6Ii8+DQo8cGF0aCBmaWxsPSIjMDAyQzU0IiBkPSJNMTIsMTIuN2MtMC41LDAtMC45LTAuNC0wLjktMC45di0wLjNjMC0xLjQsMS0yLjEsMS40LTIuM2MwLjQtMC4zLDAuNi0wLjUsMC42LTAuOGMwLTAuNi0wLjUtMS4xLTEuMS0xLjENCglzLTEuMSwwLjUtMS4xLDEuMWMwLDAuNS0wLjQsMC45LTAuOSwwLjljLTAuNSwwLTAuOS0wLjQtMC45LTAuOWMwLTEuNiwxLjMtMi45LDIuOS0yLjlzMi45LDEuMywyLjksMi45YzAsMS40LTEsMi4xLTEuNCwyLjMNCgljLTAuNSwwLjMtMC42LDAuNS0wLjYsMC45djAuM0MxMi45LDEyLjMsMTIuNSwxMi43LDEyLDEyLjd6Ii8+DQo8cGF0aCBmaWxsPSIjMDAyQzU0IiBkPSJNMTIsMTUuNmMtMC41LDAtMC45LTAuNC0wLjktMC45YzAtMC41LDAuNC0wLjksMC45LTAuOXMwLjksMC40LDAuOSwwLjlDMTIuOSwxNS4yLDEyLjUsMTUuNiwxMiwxNS42eiIvPg0KPC9zdmc+DQo='
const closeImg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgODAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjQTBBMEEwIiBkPSJNMjIuNCAyMi40YzI5LjgtMjkuOCA3OC4yLTI5LjggMTA4IDBsMjcwLjEgMjcwLjFMNjcwLjYgMjIuNGMzMC4zLTI5LjMgNzguNy0yOC41IDEwOCAxLjkgMjguNiAyOS42IDI4LjYgNzYuNSAwIDEwNi4xTDUwOC41IDQwMC41bDI3MC4xIDI3MC4xYzI5LjMgMzAuMyAyOC41IDc4LjctMS45IDEwOC0yOS42IDI4LjYtNzYuNSAyOC42LTEwNi4xIDBMNDAwLjUgNTA4LjUgMTMwLjQgNzc4LjZjLTMwLjMgMjkuMy03OC43IDI4LjUtMTA4LTEuOS0yOC42LTI5LjYtMjguNi03Ni41IDAtMTA2LjFsMjcwLjEtMjcwLjFMMjIuNCAxMzAuNGMtMjkuOS0yOS45LTI5LjktNzguMiAwLTEwOHoiLz48L3N2Zz4='
const sendImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgODUwIDg1MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo3MjtzdHJva2UtbGluZWNhcDpyb3VuZDt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY5NS43LDk2LjljMzUuNy0xMC4yLDY4LjYsMjIuOCw1OC40LDU4LjRMNTgyLjIsNzU2LjljLTE4LjQsNjQuNS0xMDQuNSw3Ni42LTE0MCwxOS43TDMyMiw1ODMuOA0KCQljLTEzLjktMjIuMi0zMi42LTQxLTU0LjktNTQuOUw3NC40LDQwOC44Yy01Ni45LTM1LjUtNDQuOC0xMjEuNiwxOS43LTE0MEw2OTUuNyw5Ni45eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMjEuNyw1MjkuM2wxNTEuOS0xNTEuOSIvPg0KPC9nPg0KPC9zdmc+DQo='
const logoImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMwMCAzMDAiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGVsbGlwc2UgZmlsbD0iI0ZGRkZGRiIgY3g9IjE1MCIgY3k9IjE1MCIgcng9IjE1MCIgcnk9IjE1MCIvPg0KPHJlY3QgeD0iODEiIHk9IjczIiBmaWxsPSIjMzMzMzMzIiB3aWR0aD0iMTM4IiBoZWlnaHQ9IjMwIi8+DQo8cmVjdCB4PSIxMzUiIHk9Ijg3IiBmaWxsPSIjMzMzMzMzIiB3aWR0aD0iMzAiIGhlaWdodD0iMTYwIi8+DQo8L3N2Zz4NCg=='

const styleLink = '/index.css'
const socketLink = 'wss://chat.kutkh.co/chat/'

let widget, shadowTextarea, mainTextarea, chatMessages, chatPrinting, webSocket, messages

const randomString = (len) => {
  return [...Array(len)].map(() => Math.random().toString(36)[2]).join('')
}

const newMessage = ({ role, message }) => {
  const chatMessage = document.createElement('div')
  chatMessage.classList.add('gptChatWidget_chatMessage')
  if (role === 'user') {
    chatPrinting.classList.add('gptChatWidget_chatPrintingActive')
  } else {
    if (role === 'ui') {
      chatMessage.classList.add('gptChatWidget_chatMessageUser')
    } else {
      chatPrinting.classList.remove('gptChatWidget_chatPrintingActive')
      chatMessage.classList.add('gptChatWidget_chatMessageBot')
    }
    chatMessage.innerText = message
    chatMessages.append(chatMessage)
    messages = [...(messages || []), { role, message }]
    window.localStorage.setItem('gptChatWidget_messages', JSON.stringify(messages))
    window.localStorage.setItem('gptChatWidget_chatIdDate', Date.now().toString())
  }
  chatMessages.scrollTo(0, chatMessages.scrollHeight)
}

const initMessages = () => {
  messages.forEach(({ role, message }) => {
    const chatMessage = document.createElement('div')
    chatMessage.classList.add('gptChatWidget_chatMessage')
    chatMessage.classList.add(role === 'ui' ? 'gptChatWidget_chatMessageUser' : 'gptChatWidget_chatMessageBot')
    chatMessage.innerText = message
    chatMessages.append(chatMessage)
  })
  chatMessages.scrollTo(0, chatMessages.scrollHeight)
}

const ping = e => {
  chatPrinting.classList.add('gptChatWidget_chatPrintingActive')
  setInterval(() => e.target.send('ping'), 5000)
}

const createWebSocket = (chatId) => {
  webSocket = new WebSocket(socketLink + chatId + '/')
  webSocket.addEventListener('open', ping)
  webSocket.addEventListener('error', () => createWebSocket(chatId))
  webSocket.addEventListener('message', e => {
    const data = JSON.parse(e.data)
    newMessage(data)
  })
}

const openChat = () => {
  if (!webSocket || webSocket.readyState !== WebSocket.OPEN) {
    const currentTime = Date.now()
    const chatIdDate = window.localStorage.getItem('gptChatWidget_chatIdDate')
    let chatId = 'gpt' + randomString(48)
    if (chatIdDate && (currentTime - chatIdDate) <= 1000 * 60 * 60) {
      chatId = window.localStorage.getItem('gptChatWidget_chatId') || chatId
      messages = JSON.parse(window.localStorage.getItem('gptChatWidget_messages') || "[]")
      initMessages()
    }
    window.localStorage.setItem('gptChatWidget_chatId', chatId)
    createWebSocket(chatId)
  }
  widget.classList.add('gptChatWidget_openChat')
}

const closeChat = () => {
  widget.classList.remove('gptChatWidget_openChat')
}

const sendMessage = () => {
  const message = mainTextarea.value
  if (message.trim()) {
    mainTextarea.value = ''
    mainTextarea.dispatchEvent(new Event('input'))
    newMessage({
      role: 'ui',
      message,
    })
    webSocket.send(JSON.stringify({ message }))
  }
}

const insertAtCaret = (element = document.activeElement, text = '') => {
  if (element.selectionStart || element.selectionStart === 0) {
    const startPos = element.selectionStart
    const endPos = element.selectionEnd
    element.value = element.value.substring(0, startPos) +
      text +
      element.value.substring(endPos, element.value.length)
    element.selectionStart = startPos + text.length
    element.selectionEnd = startPos + text.length
  } else {
    element.value += text
  }
  element.dispatchEvent(new Event('input'))
  element.blur()
  element.focus()
}

const newLineOrSend = e => {
  if (e.keyCode === 10 || e.keyCode === 13) {
    e.preventDefault()
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      sendMessage()
    } else {
      insertAtCaret(e.target, '\n')
    }
  }
}

const changeTextAreaSize = e => {
  const style = window.getComputedStyle(e.target)
  const lineHeight = Number.parseInt(style.lineHeight)
  shadowTextarea.style.width = style.width
  shadowTextarea.style.maxHeight = `${lineHeight * 5}px`
  shadowTextarea.value = e.target.value
  let height = shadowTextarea.scrollHeight
  if (height > lineHeight * 5) {
    height = lineHeight * 5
  }
  e.target.style.height = `${height}px`
}

const createChatWidget = () => {
  const style = document.createElement('link')
  style.rel = 'stylesheet'
  style.href = styleLink
  document.head.append(style)

  widget = document.createElement('div')
  widget.className = 'gptChatWidget'
  document.body.append(widget)

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

  const closeButtonImg = document.createElement('img')
  closeButtonImg.className = 'gptChatWidget_close'
  closeButtonImg.src = closeImg
  closeButtonImg.alt = 'X'
  closeButtonImg.addEventListener('click', closeChat)
  chatHeader.append(closeButtonImg)

  const chatLogo = document.createElement('img')
  chatLogo.className = 'gptChatWidget_logo'
  chatLogo.alt = 'Чат'
  chatLogo.src = logoImg
  chatHeader.append(chatLogo)

  const chatTitle1 = document.createElement('h1')
  chatTitle1.innerText = 'Привет!'
  chatHeader.append(chatTitle1)

  chatMessages = document.createElement('div')
  chatMessages.className = 'gptChatWidget_chatMessages'
  chatWindow.append(chatMessages)

  chatPrinting = document.createElement('div')
  chatPrinting.className = 'gptChatWidget_chatPrinting'
  chatPrinting.innerText = 'Печатаем ответ'
  chatWindow.append(chatPrinting)

  const chatFooter = document.createElement('div')
  chatFooter.className = 'gptChatWidget_chatFooter'
  chatWindow.append(chatFooter)

  mainTextarea = document.createElement('textarea')
  mainTextarea.addEventListener('input', changeTextAreaSize)
  mainTextarea.addEventListener('keydown', newLineOrSend)
  chatFooter.append(mainTextarea)

  shadowTextarea = document.createElement('textarea')
  shadowTextarea.className = 'gptChatWidget_shadowTextarea'
  chatFooter.append(shadowTextarea)

  const sendButton = document.createElement('button')
  sendButton.className = 'gptChatWidget_button gptChatWidget_sendButton'
  sendButton.addEventListener('click', sendMessage)
  chatFooter.append(sendButton)

  const sendButtonImg = document.createElement('img')
  sendButtonImg.src = sendImg
  sendButtonImg.alt = 'send'
  sendButton.append(sendButtonImg)
}

window.onload = () => {
  createChatWidget()
}
