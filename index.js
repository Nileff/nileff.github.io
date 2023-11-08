const messageImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMjQgMTAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTc3NC42LDIwNy40SDgzMmMxMDYsMCwxOTIsODYsMTkyLDE5MnYyNTZjMCwxMDYtODYsMTkyLTE5MiwxOTJIMTkyYy0xMDYsMC0xOTItODYtMTkyLTE5MnYtMjU2DQoJYzAtMTA2LDg2LTE5MiwxOTItMTkyaDU3LjRMMjI2LjEsNjcuMUMyMjAuOCwzNS43LDI0Miw2LDI3My40LDAuOHM2MS4xLDE2LDY2LjMsNDcuM2wyNS42LDE1My42YzAuMywxLjksMC41LDMuOCwwLjcsNS42SDY1OA0KCWMwLjEtMS45LDAuMy0zLjcsMC43LTUuNmwyNS42LTE1My42YzUuMi0zMS40LDM0LjktNTIuNiw2Ni4zLTQ3LjNDNzgyLDYsODAzLjIsMzUuNyw3OTcuOSw2Ny4xTDc3NC42LDIwNy40eiBNMTkyLDMyMi42DQoJYy00Mi40LDAtNzYuOCwzNC40LTc2LjgsNzYuOHYyNTZjMCw0Mi40LDM0LjQsNzYuOCw3Ni44LDc2LjhoNjQwYzQyLjQsMCw3Ni44LTM0LjQsNzYuOC03Ni44di0yNTZjMC00Mi40LTM0LjQtNzYuOC03Ni44LTc2LjhIMTkyeg0KCSBNMjU2LDEwMjRjLTMxLjgsMC01Ny42LTI1LjgtNTcuNi01Ny42YzAtMzEuOCwyNS44LTU3LjYsNTcuNi01Ny42aDUxMmMzMS44LDAsNTcuNiwyNS44LDU3LjYsNTcuNmMwLDMxLjgtMjUuOCw1Ny42LTU3LjYsNTcuNkgyNTYNCgl6IE0yNTAuOSw0NzYuMmMwLTMxLjgsMjUuOC01Ny42LDU3LjYtNTcuNnM1Ny42LDI1LjgsNTcuNiw1Ny42djUxLjJjMCwzMS44LTI1LjgsNTcuNi01Ny42LDU3LjZzLTU3LjYtMjUuOC01Ny42LTU3LjZWNDc2LjJ6DQoJIE02NTcuOSw0NzYuMmMwLTMxLjgsMjUuOC01Ny42LDU3LjYtNTcuNnM1Ny42LDI1LjgsNTcuNiw1Ny42djUxLjJjMCwzMS44LTI1LjgsNTcuNi01Ny42LDU3LjZzLTU3LjYtMjUuOC01Ny42LTU3LjZWNDc2LjJ6Ii8+DQo8L3N2Zz4NCg=='
const closeImg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgODAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjQTBBMEEwIiBkPSJNMjIuNCAyMi40YzI5LjgtMjkuOCA3OC4yLTI5LjggMTA4IDBsMjcwLjEgMjcwLjFMNjcwLjYgMjIuNGMzMC4zLTI5LjMgNzguNy0yOC41IDEwOCAxLjkgMjguNiAyOS42IDI4LjYgNzYuNSAwIDEwNi4xTDUwOC41IDQwMC41bDI3MC4xIDI3MC4xYzI5LjMgMzAuMyAyOC41IDc4LjctMS45IDEwOC0yOS42IDI4LjYtNzYuNSAyOC42LTEwNi4xIDBMNDAwLjUgNTA4LjUgMTMwLjQgNzc4LjZjLTMwLjMgMjkuMy03OC43IDI4LjUtMTA4LTEuOS0yOC42LTI5LjYtMjguNi03Ni41IDAtMTA2LjFsMjcwLjEtMjcwLjFMMjIuNCAxMzAuNGMtMjkuOS0yOS45LTI5LjktNzguMiAwLTEwOHoiLz48L3N2Zz4='
const sendImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgODUwIDg1MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo3MjtzdHJva2UtbGluZWNhcDpyb3VuZDt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY5NS43LDk2LjljMzUuNy0xMC4yLDY4LjYsMjIuOCw1OC40LDU4LjRMNTgyLjIsNzU2LjljLTE4LjQsNjQuNS0xMDQuNSw3Ni42LTE0MCwxOS43TDMyMiw1ODMuOA0KCQljLTEzLjktMjIuMi0zMi42LTQxLTU0LjktNTQuOUw3NC40LDQwOC44Yy01Ni45LTM1LjUtNDQuOC0xMjEuNiwxOS43LTE0MEw2OTUuNyw5Ni45eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMjEuNyw1MjkuM2wxNTEuOS0xNTEuOSIvPg0KPC9nPg0KPC9zdmc+DQo='

const styleLink = 'data:text/css;base64,LmdwdENoYXRXaWRnZXR7cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjIwcHg7cmlnaHQ6MjBweDt6LWluZGV4Ojk5OTk5OTk5OX0uZ3B0Q2hhdFdpZGdldCAqe2ZvbnQtZmFtaWx5OkFyaWFsLCBzZXJpZn0uZ3B0Q2hhdFdpZGdldF9idXR0b257Ym9yZGVyOm5vbmU7cGFkZGluZzowO3BhZGRpbmctYmxvY2s6MDtwYWRkaW5nLWlubGluZTowO21hcmdpbjowO2N1cnNvcjpwb2ludGVyfS5ncHRDaGF0V2lkZ2V0X2J1dHRvbi5ncHRDaGF0V2lkZ2V0X3N0YXJ0QnV0dG9ue3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3JpZ2h0OjA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6IzAwNzBkMjt3aWR0aDo2MHB4O2hlaWdodDo2MHB4O2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAwIC40ZW0gcmdiYSgwLDAsMCwwLjIpLDAgMCAuOGVtIHJnYmEoMCwwLDAsMC4zNSk7dHJhbnNmb3JtLW9yaWdpbjpib3R0b20gcmlnaHQ7dHJhbnNpdGlvbjp3aWR0aCAuMnMsaGVpZ2h0IC4yc30uZ3B0Q2hhdFdpZGdldF9idXR0b24uZ3B0Q2hhdFdpZGdldF9zdGFydEJ1dHRvbjpob3Zlcnt3aWR0aDo3MHB4O2hlaWdodDo3MHB4fS5ncHRDaGF0V2lkZ2V0X2J1dHRvbi5ncHRDaGF0V2lkZ2V0X3N0YXJ0QnV0dG9uIGltZ3t3aWR0aDo1NSU7aGVpZ2h0OjU1JX0uZ3B0Q2hhdFdpZGdldF9vcGVuQ2hhdCAuZ3B0Q2hhdFdpZGdldF9idXR0b24uZ3B0Q2hhdFdpZGdldF9zdGFydEJ1dHRvbntvcGFjaXR5OjA7ei1pbmRleDotMTt0cmFuc2l0aW9uOndpZHRoIC4ycyxoZWlnaHQgLjJzLHotaW5kZXggMHMgLjNzLG9wYWNpdHkgMHMgLjNzfS5ncHRDaGF0V2lkZ2V0X2J1dHRvbi5ncHRDaGF0V2lkZ2V0X3NlbmRCdXR0b257ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6IzAwNzBkMjtoZWlnaHQ6MzJweDt3aWR0aDozMnB4O2JvcmRlci1yYWRpdXM6NTAlO21hcmdpbi1sZWZ0OjIwcHh9LmdwdENoYXRXaWRnZXRfYnV0dG9uLmdwdENoYXRXaWRnZXRfc2VuZEJ1dHRvbiBpbWd7d2lkdGg6NTUlO2hlaWdodDo1NSV9LmdwdENoYXRXaWRnZXRfYnV0dG9uLmdwdENoYXRXaWRnZXRfc2VuZEJ1dHRvbi5ncHRDaGF0V2lkZ2V0X3NlbmRCdXR0b25EaXNhYmxlZHtvcGFjaXR5Oi4yO2JhY2tncm91bmQ6IzFGMUYxRjtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lfS5ncHRDaGF0V2lkZ2V0X2NoYXRXaW5kb3d7ZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3JpZ2h0OjA7b3BhY2l0eTowO3otaW5kZXg6LTE7YmFja2dyb3VuZC1jb2xvcjojMDA3MGQyO3dpZHRoOjcwcHg7aGVpZ2h0OjcwcHg7Ym9yZGVyLXJhZGl1czozNXB4O3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tIHJpZ2h0O3RyYW5zaXRpb246d2lkdGggLjNzLGhlaWdodCAuM3MsYm9yZGVyLXJhZGl1cyAuM3MsYmFja2dyb3VuZC1jb2xvciAuM3M7Ym94LXNoYWRvdzowIDAgLjRlbSByZ2JhKDAsMCwwLDAuMiksMCAwIC44ZW0gcmdiYSgwLDAsMCwwLjM1KX0uZ3B0Q2hhdFdpZGdldF9jaGF0V2luZG93LmdwdENoYXRXaWRnZXRfY2hhdFdpbmRvd0xvYWRlZHt0cmFuc2l0aW9uOndpZHRoIC4zcyxoZWlnaHQgLjNzLGJvcmRlci1yYWRpdXMgLjNzLGJhY2tncm91bmQtY29sb3IgLjNzLHotaW5kZXggMHMgLjNzLG9wYWNpdHkgMHMgLjNzfS5ncHRDaGF0V2lkZ2V0X2NoYXRXaW5kb3c+Knt0cmFuc2l0aW9uOm5vbmU7b3BhY2l0eTowfS5ncHRDaGF0V2lkZ2V0X29wZW5DaGF0IC5ncHRDaGF0V2lkZ2V0X2NoYXRXaW5kb3d7b3BhY2l0eToxO3otaW5kZXg6MTtiYWNrZ3JvdW5kLWNvbG9yOiNGMEYwRjA7d2lkdGg6NDAwcHg7bWF4LXdpZHRoOmNhbGMoMTAwdncgLSA0MHB4KTtoZWlnaHQ6NjAwcHg7bWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gNDBweCk7Ym9yZGVyLXJhZGl1czoxNnB4O3RyYW5zaXRpb246d2lkdGggLjNzLGhlaWdodCAuM3MsYm9yZGVyLXJhZGl1cyAuM3MsYmFja2dyb3VuZC1jb2xvciAuM3N9LmdwdENoYXRXaWRnZXRfb3BlbkNoYXQgLmdwdENoYXRXaWRnZXRfY2hhdFdpbmRvdz4qe3RyYW5zaXRpb246b3BhY2l0eSAuMXMgLjNzO29wYWNpdHk6MX0uZ3B0Q2hhdFdpZGdldF9jaGF0SGVhZGVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4LXNocmluazowO2ZsZXgtZmxvdzpyb3cgbm93cmFwO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7cGFkZGluZzoxNnB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KCM5ZmQyZmYsIHRyYW5zcGFyZW50KTtib3JkZXItcmFkaXVzOjE2cHggMTZweCAwIDB9LmdwdENoYXRXaWRnZXRfY2hhdEhlYWRlcj4qOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTo4cHh9LmdwdENoYXRXaWRnZXRfY2hhdEhlYWRlciAuZ3B0Q2hhdFdpZGdldF9sb2dve3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHh9LmdwdENoYXRXaWRnZXRfY2hhdEhlYWRlciAuZ3B0Q2hhdFdpZGdldF9jbG9zZXt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2N1cnNvcjpwb2ludGVyO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxNnB4O3JpZ2h0OjE2cHh9LmdwdENoYXRXaWRnZXRfY2hhdEhlYWRlciAuZ3B0Q2hhdFdpZGdldF90aXRsZXN7bWFyZ2luLWxlZnQ6MTJweH0uZ3B0Q2hhdFdpZGdldF9jaGF0SGVhZGVyIC5ncHRDaGF0V2lkZ2V0X3RpdGxlcz4qe21hcmdpbi1ibG9jazowO21hcmdpbi1pbmxpbmU6MH0uZ3B0Q2hhdFdpZGdldF9jaGF0SGVhZGVyIC5ncHRDaGF0V2lkZ2V0X3RpdGxlcyBoMntmb250LXNpemU6MTJweDtmb250LXdlaWdodDo3MDA7Y29sb3I6IzFGMUYxRn0uZ3B0Q2hhdFdpZGdldF9jaGF0SGVhZGVyIC5ncHRDaGF0V2lkZ2V0X3RpdGxlcyBoM3tmb250LXNpemU6MTJweDtmb250LXdlaWdodDpub3JtYWw7Y29sb3I6Izc3Nzc3N30uZ3B0Q2hhdFdpZGdldF9jaGF0SGVhZGVyIC5ncHRDaGF0V2lkZ2V0X2NoYXRQb2xpY3l7Zm9udC1zaXplOjEycHg7Y29sb3I6Izc3Nzc3NzttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDoyOHB4fS5ncHRDaGF0V2lkZ2V0X2NoYXRNZXNzYWdlc3tkaXNwbGF5OmZsZXg7ZmxleC1mbG93OmNvbHVtbiBub3dyYXA7cGFkZGluZzoxNnB4O2ZsZXg6MTtvdmVyZmxvdy15OmF1dG87b3ZlcmZsb3cteDpoaWRkZW59LmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDo0cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0uZ3B0Q2hhdFdpZGdldF9jaGF0TWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie3dpZHRoOjRweDtib3JkZXItcmFkaXVzOjJweDtiYWNrZ3JvdW5kOiNEMEQwRDA7Y3Vyc29yOmRlZmF1bHR9LmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VzIC5ncHRDaGF0V2lkZ2V0X2NoYXRNZXNzYWdle3BhZGRpbmc6MTJweDtib3JkZXItcmFkaXVzOjhweDtmb250LXNpemU6MTZweDtjb2xvcjojMUYxRjFGO21heC13aWR0aDpjYWxjKDEwMCUgLSA2MHB4KX0uZ3B0Q2hhdFdpZGdldF9jaGF0TWVzc2FnZXMgLmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2UuZ3B0Q2hhdFdpZGdldF9jaGF0TWVzc2FnZUJvdHtiYWNrZ3JvdW5kOiNEMEQwRDA7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fS5ncHRDaGF0V2lkZ2V0X2NoYXRNZXNzYWdlcyAuZ3B0Q2hhdFdpZGdldF9jaGF0TWVzc2FnZS5ncHRDaGF0V2lkZ2V0X2NoYXRNZXNzYWdlVXNlcntiYWNrZ3JvdW5kOiM5ZmQyZmY7YWxpZ24tc2VsZjpmbGV4LWVuZH0uZ3B0Q2hhdFdpZGdldF9jaGF0TWVzc2FnZXMgLmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2U6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEycHh9LmdwdENoYXRXaWRnZXRfY2hhdFByaW50aW5ne2Rpc3BsYXk6bm9uZTtwYWRkaW5nOjE2cHg7Zm9udC1zaXplOjE2cHg7Y29sb3I6Izc3Nzc3N30uZ3B0Q2hhdFdpZGdldF9jaGF0UHJpbnRpbmcuZ3B0Q2hhdFdpZGdldF9jaGF0UHJpbnRpbmdBY3RpdmV7ZGlzcGxheTpmbGV4fS5ncHRDaGF0V2lkZ2V0X2NoYXRQcmludGluZy5ncHRDaGF0V2lkZ2V0X2NoYXRQcmludGluZ0FjdGl2ZTphZnRlcntjb250ZW50OicnO2FuaW1hdGlvbjoycyBsaW5lYXIgMHMgaW5maW5pdGUgZG90c30uZ3B0Q2hhdFdpZGdldF9jaGF0Rm9vdGVye2Rpc3BsYXk6ZmxleDtmbGV4LWZsb3c6cm93IG5vd3JhcDthbGlnbi1pdGVtczpmbGV4LWVuZDtwYWRkaW5nOjE2cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgI0QwRDBEMDtmbGV4LXNocmluazowfS5ncHRDaGF0V2lkZ2V0X2NoYXRGb290ZXIgdGV4dGFyZWF7cmVzaXplOm5vbmU7ZmxleDoxO2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjIwcHg7cGFkZGluZzowO21pbi1oZWlnaHQ6NDBweDtib3JkZXI6bm9uZTtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0uZ3B0Q2hhdFdpZGdldF9jaGF0Rm9vdGVyIHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDo0cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0uZ3B0Q2hhdFdpZGdldF9jaGF0Rm9vdGVyIHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYnt3aWR0aDo0cHg7Ym9yZGVyLXJhZGl1czoycHg7YmFja2dyb3VuZDojRDBEMEQwO2N1cnNvcjpkZWZhdWx0fS5ncHRDaGF0V2lkZ2V0X2NoYXRGb290ZXIgdGV4dGFyZWEuZ3B0Q2hhdFdpZGdldF9zaGFkb3dUZXh0YXJlYXtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Oi0xO29wYWNpdHk6MH1Aa2V5ZnJhbWVzIGRvdHN7MCV7Y29udGVudDonJ30yNSV7Y29udGVudDonLid9NTAle2NvbnRlbnQ6Jy4uJ303NSV7Y29udGVudDonLi4uJ30xMDAle2NvbnRlbnQ6Jyd9fQ=='
const socketLink = 'wss://chat.kutkh.co/chat/'
const reconnectTimeout = 5 * 1000
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
    if (chatIdDate && (currentTime - chatIdDate) <= 1000 * 60 * 60) {
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
