const messageImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMjQgMTAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTc3NC42LDIwNy40SDgzMmMxMDYsMCwxOTIsODYsMTkyLDE5MnYyNTZjMCwxMDYtODYsMTkyLTE5MiwxOTJIMTkyYy0xMDYsMC0xOTItODYtMTkyLTE5MnYtMjU2DQoJYzAtMTA2LDg2LTE5MiwxOTItMTkyaDU3LjRMMjI2LjEsNjcuMUMyMjAuOCwzNS43LDI0Miw2LDI3My40LDAuOHM2MS4xLDE2LDY2LjMsNDcuM2wyNS42LDE1My42YzAuMywxLjksMC41LDMuOCwwLjcsNS42SDY1OA0KCWMwLjEtMS45LDAuMy0zLjcsMC43LTUuNmwyNS42LTE1My42YzUuMi0zMS40LDM0LjktNTIuNiw2Ni4zLTQ3LjNDNzgyLDYsODAzLjIsMzUuNyw3OTcuOSw2Ny4xTDc3NC42LDIwNy40eiBNMTkyLDMyMi42DQoJYy00Mi40LDAtNzYuOCwzNC40LTc2LjgsNzYuOHYyNTZjMCw0Mi40LDM0LjQsNzYuOCw3Ni44LDc2LjhoNjQwYzQyLjQsMCw3Ni44LTM0LjQsNzYuOC03Ni44di0yNTZjMC00Mi40LTM0LjQtNzYuOC03Ni44LTc2LjhIMTkyeg0KCSBNMjU2LDEwMjRjLTMxLjgsMC01Ny42LTI1LjgtNTcuNi01Ny42YzAtMzEuOCwyNS44LTU3LjYsNTcuNi01Ny42aDUxMmMzMS44LDAsNTcuNiwyNS44LDU3LjYsNTcuNmMwLDMxLjgtMjUuOCw1Ny42LTU3LjYsNTcuNkgyNTYNCgl6IE0yNTAuOSw0NzYuMmMwLTMxLjgsMjUuOC01Ny42LDU3LjYtNTcuNnM1Ny42LDI1LjgsNTcuNiw1Ny42djUxLjJjMCwzMS44LTI1LjgsNTcuNi01Ny42LDU3LjZzLTU3LjYtMjUuOC01Ny42LTU3LjZWNDc2LjJ6DQoJIE02NTcuOSw0NzYuMmMwLTMxLjgsMjUuOC01Ny42LDU3LjYtNTcuNnM1Ny42LDI1LjgsNTcuNiw1Ny42djUxLjJjMCwzMS44LTI1LjgsNTcuNi01Ny42LDU3LjZzLTU3LjYtMjUuOC01Ny42LTU3LjZWNDc2LjJ6Ii8+DQo8L3N2Zz4NCg=='
const closeImg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgODAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjQTBBMEEwIiBkPSJNMjIuNCAyMi40YzI5LjgtMjkuOCA3OC4yLTI5LjggMTA4IDBsMjcwLjEgMjcwLjFMNjcwLjYgMjIuNGMzMC4zLTI5LjMgNzguNy0yOC41IDEwOCAxLjkgMjguNiAyOS42IDI4LjYgNzYuNSAwIDEwNi4xTDUwOC41IDQwMC41bDI3MC4xIDI3MC4xYzI5LjMgMzAuMyAyOC41IDc4LjctMS45IDEwOC0yOS42IDI4LjYtNzYuNSAyOC42LTEwNi4xIDBMNDAwLjUgNTA4LjUgMTMwLjQgNzc4LjZjLTMwLjMgMjkuMy03OC43IDI4LjUtMTA4LTEuOS0yOC42LTI5LjYtMjguNi03Ni41IDAtMTA2LjFsMjcwLjEtMjcwLjFMMjIuNCAxMzAuNGMtMjkuOS0yOS45LTI5LjktNzguMiAwLTEwOHoiLz48L3N2Zz4='
const sendImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgODUwIDg1MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo3MjtzdHJva2UtbGluZWNhcDpyb3VuZDt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY5NS43LDk2LjljMzUuNy0xMC4yLDY4LjYsMjIuOCw1OC40LDU4LjRMNTgyLjIsNzU2LjljLTE4LjQsNjQuNS0xMDQuNSw3Ni42LTE0MCwxOS43TDMyMiw1ODMuOA0KCQljLTEzLjktMjIuMi0zMi42LTQxLTU0LjktNTQuOUw3NC40LDQwOC44Yy01Ni45LTM1LjUtNDQuOC0xMjEuNiwxOS43LTE0MEw2OTUuNyw5Ni45eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMjEuNyw1MjkuM2wxNTEuOS0xNTEuOSIvPg0KPC9nPg0KPC9zdmc+DQo='

const styleLink = 'data:text/css;base64,LmdwdENoYXRXaWRnZXR7cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjIwcHg7cmlnaHQ6MjBweDt6LWluZGV4Ojk5OTk5OTk5OX0uZ3B0Q2hhdFdpZGdldCAqe2ZvbnQtZmFtaWx5OkFyaWFsLCBzZXJpZn0uZ3B0Q2hhdFdpZGdldF9idXR0b257Ym9yZGVyOm5vbmU7cGFkZGluZzowO3BhZGRpbmctYmxvY2s6MDtwYWRkaW5nLWlubGluZTowO21hcmdpbjowO2N1cnNvcjpwb2ludGVyfS5ncHRDaGF0V2lkZ2V0X2J1dHRvbi5ncHRDaGF0V2lkZ2V0X3N0YXJ0QnV0dG9ue3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3JpZ2h0OjA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6IzAwNzBkMjt3aWR0aDoyMDBweDtoZWlnaHQ6NjBweDtib3JkZXItcmFkaXVzOjMwcHg7Ym94LXNoYWRvdzowIDAgLjRlbSByZ2JhKDAsMCwwLDAuMiksMCAwIC44ZW0gcmdiYSgwLDAsMCwwLjM1KTt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSByaWdodH0uZ3B0Q2hhdFdpZGdldF9idXR0b24uZ3B0Q2hhdFdpZGdldF9zdGFydEJ1dHRvbiBpbWd7ZGlzcGxheTpub25lO3dpZHRoOjU1JTtoZWlnaHQ6NTUlfS5ncHRDaGF0V2lkZ2V0X2J1dHRvbi5ncHRDaGF0V2lkZ2V0X3N0YXJ0QnV0dG9uIHNwYW57Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiNGMEYwRjB9LmdwdENoYXRXaWRnZXRfYnV0dG9uLmdwdENoYXRXaWRnZXRfc3RhcnRCdXR0b246aG92ZXIgaW1ne2Rpc3BsYXk6YmxvY2t9LmdwdENoYXRXaWRnZXRfYnV0dG9uLmdwdENoYXRXaWRnZXRfc3RhcnRCdXR0b246aG92ZXIgc3BhbntkaXNwbGF5Om5vbmV9LmdwdENoYXRXaWRnZXRfb3BlbkNoYXQgLmdwdENoYXRXaWRnZXRfYnV0dG9uLmdwdENoYXRXaWRnZXRfc3RhcnRCdXR0b257ZGlzcGxheTpub25lfS5ncHRDaGF0V2lkZ2V0X2J1dHRvbi5ncHRDaGF0V2lkZ2V0X3NlbmRCdXR0b257ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6IzAwNzBkMjtoZWlnaHQ6MzJweDt3aWR0aDozMnB4O2JvcmRlci1yYWRpdXM6NTAlO21hcmdpbi1sZWZ0OjIwcHh9LmdwdENoYXRXaWRnZXRfYnV0dG9uLmdwdENoYXRXaWRnZXRfc2VuZEJ1dHRvbiBpbWd7d2lkdGg6NTUlO2hlaWdodDo1NSV9LmdwdENoYXRXaWRnZXRfYnV0dG9uLmdwdENoYXRXaWRnZXRfc2VuZEJ1dHRvbi5ncHRDaGF0V2lkZ2V0X3NlbmRCdXR0b25EaXNhYmxlZHtvcGFjaXR5Oi4yO2JhY2tncm91bmQ6IzFGMUYxRjtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lfS5ncHRDaGF0V2lkZ2V0X2NoYXRXaW5kb3d7ZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3JpZ2h0OjA7b3BhY2l0eTowO3otaW5kZXg6LTE7YmFja2dyb3VuZC1jb2xvcjojMDA3MGQyO3dpZHRoOjcwcHg7aGVpZ2h0OjcwcHg7Ym9yZGVyLXJhZGl1czozNXB4O3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tIHJpZ2h0O2JveC1zaGFkb3c6MCAwIC40ZW0gcmdiYSgwLDAsMCwwLjIpLDAgMCAuOGVtIHJnYmEoMCwwLDAsMC4zNSl9LmdwdENoYXRXaWRnZXRfb3BlbkNoYXQgLmdwdENoYXRXaWRnZXRfY2hhdFdpbmRvd3tvcGFjaXR5OjE7ei1pbmRleDoxO2JhY2tncm91bmQtY29sb3I6I0YwRjBGMDt3aWR0aDo0MDBweDttYXgtd2lkdGg6Y2FsYygxMDB2dyAtIDQwcHgpO2hlaWdodDo2MDBweDttYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSA0MHB4KTtib3JkZXItcmFkaXVzOjE2cHh9LmdwdENoYXRXaWRnZXRfY2hhdEhlYWRlcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDtmbGV4LWZsb3c6cm93IG5vd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3BhZGRpbmc6MTZweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgjOWZkMmZmLCB0cmFuc3BhcmVudCk7Ym9yZGVyLXJhZGl1czoxNnB4IDE2cHggMCAwfS5ncHRDaGF0V2lkZ2V0X2NoYXRIZWFkZXI+Kjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206OHB4fS5ncHRDaGF0V2lkZ2V0X2NoYXRIZWFkZXIgLmdwdENoYXRXaWRnZXRfbG9nb3t3aWR0aDoyNHB4O2hlaWdodDoyNHB4fS5ncHRDaGF0V2lkZ2V0X2NoYXRIZWFkZXIgLmdwdENoYXRXaWRnZXRfY2xvc2V7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTZweDtyaWdodDoxNnB4fS5ncHRDaGF0V2lkZ2V0X2NoYXRIZWFkZXIgLmdwdENoYXRXaWRnZXRfdGl0bGVze21hcmdpbi1sZWZ0OjEycHh9LmdwdENoYXRXaWRnZXRfY2hhdEhlYWRlciAuZ3B0Q2hhdFdpZGdldF90aXRsZXM+KnttYXJnaW4tYmxvY2s6MDttYXJnaW4taW5saW5lOjB9LmdwdENoYXRXaWRnZXRfY2hhdEhlYWRlciAuZ3B0Q2hhdFdpZGdldF90aXRsZXMgaDJ7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiMxRjFGMUZ9LmdwdENoYXRXaWRnZXRfY2hhdEhlYWRlciAuZ3B0Q2hhdFdpZGdldF90aXRsZXMgaDN7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6bm9ybWFsO2NvbG9yOiM3Nzc3Nzd9LmdwdENoYXRXaWRnZXRfY2hhdEhlYWRlciAuZ3B0Q2hhdFdpZGdldF9jaGF0UG9saWN5e2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM3Nzc3Nzc7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6MjhweH0uZ3B0Q2hhdFdpZGdldF9jaGF0TWVzc2FnZXN7ZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO3BhZGRpbmc6MTZweDtmbGV4OjE7b3ZlcmZsb3cteTphdXRvO292ZXJmbG93LXg6aGlkZGVufS5ncHRDaGF0V2lkZ2V0X2NoYXRNZXNzYWdlczo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6NHB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9LmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYnt3aWR0aDo0cHg7Ym9yZGVyLXJhZGl1czoycHg7YmFja2dyb3VuZDojRDBEMEQwO2N1cnNvcjpkZWZhdWx0fS5ncHRDaGF0V2lkZ2V0X2NoYXRNZXNzYWdlcyAuZ3B0Q2hhdFdpZGdldF9jaGF0TWVzc2FnZXtwYWRkaW5nOjEycHg7Ym9yZGVyLXJhZGl1czo4cHg7Zm9udC1zaXplOjE2cHg7Y29sb3I6IzFGMUYxRjttYXgtd2lkdGg6Y2FsYygxMDAlIC0gNjBweCl9LmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VzIC5ncHRDaGF0V2lkZ2V0X2NoYXRNZXNzYWdlLmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VCb3R7YmFja2dyb3VuZDojRDBEMEQwO2FsaWduLXNlbGY6ZmxleC1zdGFydH0uZ3B0Q2hhdFdpZGdldF9jaGF0TWVzc2FnZXMgLmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2UuZ3B0Q2hhdFdpZGdldF9jaGF0TWVzc2FnZVVzZXJ7YmFja2dyb3VuZDojOWZkMmZmO2FsaWduLXNlbGY6ZmxleC1lbmR9LmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VzIC5ncHRDaGF0V2lkZ2V0X2NoYXRNZXNzYWdlOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxMnB4fS5ncHRDaGF0V2lkZ2V0X2NoYXRQcmludGluZ3tkaXNwbGF5Om5vbmU7cGFkZGluZzoxNnB4O2ZvbnQtc2l6ZToxNnB4O2NvbG9yOiM3Nzc3Nzd9LmdwdENoYXRXaWRnZXRfY2hhdFByaW50aW5nLmdwdENoYXRXaWRnZXRfY2hhdFByaW50aW5nQWN0aXZle2Rpc3BsYXk6ZmxleH0uZ3B0Q2hhdFdpZGdldF9jaGF0UHJpbnRpbmcuZ3B0Q2hhdFdpZGdldF9jaGF0UHJpbnRpbmdBY3RpdmU6YWZ0ZXJ7Y29udGVudDonJzthbmltYXRpb246MnMgbGluZWFyIDBzIGluZmluaXRlIGRvdHN9LmdwdENoYXRXaWRnZXRfY2hhdEZvb3RlcntkaXNwbGF5OmZsZXg7ZmxleC1mbG93OnJvdyBub3dyYXA7YWxpZ24taXRlbXM6ZmxleC1lbmQ7cGFkZGluZzoxNnB4O2JvcmRlci10b3A6MXB4IHNvbGlkICNEMEQwRDA7ZmxleC1zaHJpbms6MH0uZ3B0Q2hhdFdpZGdldF9jaGF0Rm9vdGVyIHRleHRhcmVhe3Jlc2l6ZTpub25lO2ZsZXg6MTtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoyMHB4O3BhZGRpbmc6MDttaW4taGVpZ2h0OjQwcHg7Ym9yZGVyOm5vbmU7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9LmdwdENoYXRXaWRnZXRfY2hhdEZvb3RlciB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6NHB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9LmdwdENoYXRXaWRnZXRfY2hhdEZvb3RlciB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7d2lkdGg6NHB4O2JvcmRlci1yYWRpdXM6MnB4O2JhY2tncm91bmQ6I0QwRDBEMDtjdXJzb3I6ZGVmYXVsdH0uZ3B0Q2hhdFdpZGdldF9jaGF0Rm9vdGVyIHRleHRhcmVhLmdwdENoYXRXaWRnZXRfc2hhZG93VGV4dGFyZWF7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMTtvcGFjaXR5OjB9QGtleWZyYW1lcyBkb3RzezAle2NvbnRlbnQ6Jyd9MjUle2NvbnRlbnQ6Jy4nfTUwJXtjb250ZW50OicuLid9NzUle2NvbnRlbnQ6Jy4uLid9MTAwJXtjb250ZW50OicnfX0='
const socketLink = 'wss://chat.kutkh.co/chat/'
const reconnectTimeout = 5 * 1000
const chatSaveTime = 1000 * 60 * 60
const chatPrintingText = 'Печатаем ответ'
const chatConnectingText = 'Подключаемся'

let widget, shadowTextarea, mainTextarea, sendButton, chatMessages, chatPrinting, webSocket, messages

const randomString = (len) => {
  return [...Array(len)].map(() => Math.random().toString(36)[2]).join('')
}

const newMessage = ({ role, message }) => {
  const chatMessage = document.createElement('div')
  chatMessage.classList.add('gptChatWidget_chatMessage')
  if (role === 'user') {
    chatPrinting.classList.add('gptChatWidget_chatPrintingActive')
    sendButton.classList.add('gptChatWidget_sendButtonDisabled')
    mainTextarea.disabled = true
  } else {
    if (role === 'ui') {
      chatMessage.classList.add('gptChatWidget_chatMessageUser')
    } else {
      chatPrinting.classList.remove('gptChatWidget_chatPrintingActive')
      sendButton.classList.remove('gptChatWidget_sendButtonDisabled')
      mainTextarea.disabled = false
      mainTextarea.focus()
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
  chatPrinting.innerText = chatPrintingText
  setInterval(() => e.target.send('ping'), 5000)
}

const createWebSocket = (chatId) => {
  const chatClosed = window.localStorage.getItem('gptChatWidget_chatClosed') || 0
  const time = Date.now().toString() - chatClosed
  if (time > reconnectTimeout) {
    chatPrinting.classList.remove('gptChatWidget_chatPrintingActive')
    webSocket = new WebSocket(socketLink + chatId + '/')
    webSocket.addEventListener('open', ping)
    webSocket.addEventListener('close', () => {
      window.localStorage.setItem('gptChatWidget_chatClosed', Date.now().toString())
      createWebSocket(chatId)
    })
    webSocket.addEventListener('message', e => {
      const data = JSON.parse(e.data)
      newMessage(data)
    })
  } else {
    chatPrinting.innerText = chatConnectingText
    chatPrinting.classList.add('gptChatWidget_chatPrintingActive')
    setTimeout(() => createWebSocket(chatId), 500)
  }
}

const openChat = () => {
  if (!webSocket || webSocket.readyState !== WebSocket.OPEN) {
    const currentTime = Date.now()
    const chatIdDate = window.localStorage.getItem('gptChatWidget_chatIdDate')
    let chatId = 'gpt' + randomString(48)
    if (chatIdDate && (currentTime - chatIdDate) <= chatSaveTime) {
      chatId = window.localStorage.getItem('gptChatWidget_chatId') || chatId
      messages = JSON.parse(window.localStorage.getItem('gptChatWidget_messages') || "[]")
      initMessages()
    }
    window.localStorage.setItem('gptChatWidget_chatId', chatId)
    createWebSocket(chatId)
    mainTextarea.focus()
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

const initChatWidget = ({
  start,
  logo,
  title,
  subtitle,
  policy,
}) => {
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

  const startButtonText = document.createElement('span')
  startButtonText.innerText = start
  startButton.append(startButtonText)

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

  if (logo) {
    const chatLogo = document.createElement('img')
    chatLogo.className = 'gptChatWidget_logo'
    chatLogo.alt = 'Чат'
    chatLogo.src = logo
    chatHeader.append(chatLogo)
  } else {
    const chatLogo = document.createElement('div')
    chatLogo.className = 'gptChatWidget_logo'
    chatHeader.append(chatLogo)
  }

  if (title || subtitle) {
    const titles = document.createElement('div')
    titles.className = 'gptChatWidget_titles'
    chatHeader.append(titles)

    if (title) {
      const chatTitle = document.createElement('h2')
      chatTitle.innerText = title
      titles.append(chatTitle)
    }

    if (subtitle) {
      const chatSubtitle = document.createElement('h3')
      chatSubtitle.innerText = subtitle
      titles.append(chatSubtitle)
    }
  }

  if (policy) {
    const chatPolicy = document.createElement('a')
    chatPolicy.className = 'gptChatWidget_chatPolicy'
    chatPolicy.href = policy
    chatPolicy.target = '_blank'
    chatPolicy.innerText = 'условия использования'
    chatHeader.append(chatPolicy)
  }

  chatMessages = document.createElement('div')
  chatMessages.className = 'gptChatWidget_chatMessages'
  chatWindow.append(chatMessages)

  chatPrinting = document.createElement('div')
  chatPrinting.className = 'gptChatWidget_chatPrinting'
  chatPrinting.innerText = chatPrintingText
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

  sendButton = document.createElement('button')
  sendButton.className = 'gptChatWidget_button gptChatWidget_sendButton'
  sendButton.addEventListener('click', sendMessage)
  chatFooter.append(sendButton)

  const sendButtonImg = document.createElement('img')
  sendButtonImg.src = sendImg
  sendButtonImg.alt = 'send'
  sendButton.append(sendButtonImg)
}

window.onunload = () => {
  if (webSocket.readyState === WebSocket.OPEN) {
    window.localStorage.setItem('gptChatWidget_chatClosed', Date.now().toString())
  }
}
