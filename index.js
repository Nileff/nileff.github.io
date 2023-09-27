const messageImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTgsMjAuMmgtNC44bC01LjMsMy42Yy0wLjgsMC41LTEuOSwwLTEuOS0xdi0yLjZjLTMuNiwwLTYtMi40LTYtNlY3YzAtMy42LDIuNC02LDYtNmgxMmMzLjYsMCw2LDIuNCw2LDZ2Ny4yDQoJQzI0LDE3LjgsMjEuNiwyMC4yLDE4LDIwLjJ6Ii8+DQo8cGF0aCBmaWxsPSIjMDAyQzU0IiBkPSJNMTIsMTIuN2MtMC41LDAtMC45LTAuNC0wLjktMC45di0wLjNjMC0xLjQsMS0yLjEsMS40LTIuM2MwLjQtMC4zLDAuNi0wLjUsMC42LTAuOGMwLTAuNi0wLjUtMS4xLTEuMS0xLjENCglzLTEuMSwwLjUtMS4xLDEuMWMwLDAuNS0wLjQsMC45LTAuOSwwLjljLTAuNSwwLTAuOS0wLjQtMC45LTAuOWMwLTEuNiwxLjMtMi45LDIuOS0yLjlzMi45LDEuMywyLjksMi45YzAsMS40LTEsMi4xLTEuNCwyLjMNCgljLTAuNSwwLjMtMC42LDAuNS0wLjYsMC45djAuM0MxMi45LDEyLjMsMTIuNSwxMi43LDEyLDEyLjd6Ii8+DQo8cGF0aCBmaWxsPSIjMDAyQzU0IiBkPSJNMTIsMTUuNmMtMC41LDAtMC45LTAuNC0wLjktMC45YzAtMC41LDAuNC0wLjksMC45LTAuOXMwLjksMC40LDAuOSwwLjlDMTIuOSwxNS4yLDEyLjUsMTUuNiwxMiwxNS42eiIvPg0KPC9zdmc+DQo='
const closeImg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgODAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjQTBBMEEwIiBkPSJNMjIuNCAyMi40YzI5LjgtMjkuOCA3OC4yLTI5LjggMTA4IDBsMjcwLjEgMjcwLjFMNjcwLjYgMjIuNGMzMC4zLTI5LjMgNzguNy0yOC41IDEwOCAxLjkgMjguNiAyOS42IDI4LjYgNzYuNSAwIDEwNi4xTDUwOC41IDQwMC41bDI3MC4xIDI3MC4xYzI5LjMgMzAuMyAyOC41IDc4LjctMS45IDEwOC0yOS42IDI4LjYtNzYuNSAyOC42LTEwNi4xIDBMNDAwLjUgNTA4LjUgMTMwLjQgNzc4LjZjLTMwLjMgMjkuMy03OC43IDI4LjUtMTA4LTEuOS0yOC42LTI5LjYtMjguNi03Ni41IDAtMTA2LjFsMjcwLjEtMjcwLjFMMjIuNCAxMzAuNGMtMjkuOS0yOS45LTI5LjktNzguMiAwLTEwOHoiLz48L3N2Zz4='
const sendImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgODUwIDg1MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo3MjtzdHJva2UtbGluZWNhcDpyb3VuZDt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY5NS43LDk2LjljMzUuNy0xMC4yLDY4LjYsMjIuOCw1OC40LDU4LjRMNTgyLjIsNzU2LjljLTE4LjQsNjQuNS0xMDQuNSw3Ni42LTE0MCwxOS43TDMyMiw1ODMuOA0KCQljLTEzLjktMjIuMi0zMi42LTQxLTU0LjktNTQuOUw3NC40LDQwOC44Yy01Ni45LTM1LjUtNDQuOC0xMjEuNiwxOS43LTE0MEw2OTUuNyw5Ni45eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMjEuNyw1MjkuM2wxNTEuOS0xNTEuOSIvPg0KPC9nPg0KPC9zdmc+DQo='
const logoImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMwMCAzMDAiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGVsbGlwc2UgZmlsbD0iI0ZGRkZGRiIgY3g9IjE1MCIgY3k9IjE1MCIgcng9IjE1MCIgcnk9IjE1MCIvPg0KPHJlY3QgeD0iODEiIHk9IjczIiBmaWxsPSIjMzMzMzMzIiB3aWR0aD0iMTM4IiBoZWlnaHQ9IjMwIi8+DQo8cmVjdCB4PSIxMzUiIHk9Ijg3IiBmaWxsPSIjMzMzMzMzIiB3aWR0aD0iMzAiIGhlaWdodD0iMTYwIi8+DQo8L3N2Zz4NCg=='

const styleLink = '/index.css'
// const styleLink = 'data:text/css;base64,LmdwdENoYXRXaWRnZXQgew0KICBwb3NpdGlvbjogZml4ZWQ7DQogIGJvdHRvbTogMjBweDsNCiAgcmlnaHQ6IDIwcHg7DQp9DQouZ3B0Q2hhdFdpZGdldCAqIHsNCiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzZXJpZjsNCn0NCi5ncHRDaGF0V2lkZ2V0X2J1dHRvbiB7DQogIGJvcmRlcjogbm9uZTsNCiAgcGFkZGluZzogMDsNCiAgcGFkZGluZy1ibG9jazogMDsNCiAgcGFkZGluZy1pbmxpbmU6IDA7DQogIG1hcmdpbjogMDsNCiAgY3Vyc29yOiBwb2ludGVyOw0KfQ0KLmdwdENoYXRXaWRnZXRfYnV0dG9uLmdwdENoYXRXaWRnZXRfc3RhcnRCdXR0b24gew0KICBwb3NpdGlvbjogYWJzb2x1dGU7DQogIGJvdHRvbTogMDsNCiAgcmlnaHQ6IDA7DQogIGRpc3BsYXk6IGZsZXg7DQogIGFsaWduLWl0ZW1zOiBjZW50ZXI7DQogIGp1c3RpZnktY29udGVudDogY2VudGVyOw0KICBiYWNrZ3JvdW5kOiAjMDA3MGQyOw0KICB3aWR0aDogNjBweDsNCiAgaGVpZ2h0OiA2MHB4Ow0KICBib3JkZXItcmFkaXVzOiA1MCU7DQogIGJveC1zaGFkb3c6IDAgMCAwLjRlbSByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAwLjhlbSByZ2JhKDAsIDAsIDAsIDAuMzUpOw0KICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7DQogIHRyYW5zaXRpb246IHdpZHRoIDAuMnMsIGhlaWdodCAwLjJzOw0KfQ0KLmdwdENoYXRXaWRnZXRfYnV0dG9uLmdwdENoYXRXaWRnZXRfc3RhcnRCdXR0b246aG92ZXIgew0KICB3aWR0aDogNzBweDsNCiAgaGVpZ2h0OiA3MHB4Ow0KfQ0KLmdwdENoYXRXaWRnZXRfYnV0dG9uLmdwdENoYXRXaWRnZXRfc3RhcnRCdXR0b24gaW1nIHsNCiAgd2lkdGg6IDU1JTsNCiAgaGVpZ2h0OiA1NSU7DQp9DQouZ3B0Q2hhdFdpZGdldF9vcGVuQ2hhdCAuZ3B0Q2hhdFdpZGdldF9idXR0b24uZ3B0Q2hhdFdpZGdldF9zdGFydEJ1dHRvbiB7DQogIG9wYWNpdHk6IDA7DQogIHotaW5kZXg6IC0xOw0KICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzLCBoZWlnaHQgMC4ycywgei1pbmRleCAwcyAwLjNzLCBvcGFjaXR5IDBzIDAuM3M7DQp9DQouZ3B0Q2hhdFdpZGdldF9idXR0b24uZ3B0Q2hhdFdpZGdldF9zZW5kQnV0dG9uIHsNCiAgZGlzcGxheTogZmxleDsNCiAgYWxpZ24taXRlbXM6IGNlbnRlcjsNCiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7DQogIGJhY2tncm91bmQ6ICMwMDcwZDI7DQogIGhlaWdodDogMzJweDsNCiAgd2lkdGg6IDMycHg7DQogIGJvcmRlci1yYWRpdXM6IDUwJTsNCiAgbWFyZ2luLWxlZnQ6IDIwcHg7DQp9DQouZ3B0Q2hhdFdpZGdldF9idXR0b24uZ3B0Q2hhdFdpZGdldF9zZW5kQnV0dG9uIGltZyB7DQogIHdpZHRoOiA1NSU7DQogIGhlaWdodDogNTUlOw0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdFdpbmRvdyB7DQogIGRpc3BsYXk6IGZsZXg7DQogIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDsNCiAgcG9zaXRpb246IGFic29sdXRlOw0KICBib3R0b206IDA7DQogIHJpZ2h0OiAwOw0KICBvcGFjaXR5OiAwOw0KICB6LWluZGV4OiAtMTsNCiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzBkMjsNCiAgd2lkdGg6IDcwcHg7DQogIGhlaWdodDogNzBweDsNCiAgYm9yZGVyLXJhZGl1czogMzVweDsNCiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0Ow0KICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzLCBoZWlnaHQgMC4zcywgYm9yZGVyLXJhZGl1cyAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7DQogIGJveC1zaGFkb3c6IDAgMCAwLjRlbSByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAwLjhlbSByZ2JhKDAsIDAsIDAsIDAuMzUpOw0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdFdpbmRvdy5ncHRDaGF0V2lkZ2V0X2NoYXRXaW5kb3dMb2FkZWQgew0KICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzLCBoZWlnaHQgMC4zcywgYm9yZGVyLXJhZGl1cyAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIHotaW5kZXggMHMgMC4zcywgb3BhY2l0eSAwcyAwLjNzOw0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdFdpbmRvdyA+ICogew0KICB0cmFuc2l0aW9uOiBub25lOw0KICBvcGFjaXR5OiAwOw0KfQ0KLmdwdENoYXRXaWRnZXRfb3BlbkNoYXQgLmdwdENoYXRXaWRnZXRfY2hhdFdpbmRvdyB7DQogIG9wYWNpdHk6IDE7DQogIHotaW5kZXg6IDE7DQogIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7DQogIHdpZHRoOiA0MDBweDsNCiAgaGVpZ2h0OiA2MDBweDsNCiAgYm9yZGVyLXJhZGl1czogMTZweDsNCiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcywgaGVpZ2h0IDAuM3MsIGJvcmRlci1yYWRpdXMgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzOw0KfQ0KLmdwdENoYXRXaWRnZXRfb3BlbkNoYXQgLmdwdENoYXRXaWRnZXRfY2hhdFdpbmRvdyA+ICogew0KICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgMC4zczsNCiAgb3BhY2l0eTogMTsNCn0NCi5ncHRDaGF0V2lkZ2V0X2NoYXRIZWFkZXIgew0KICBwb3NpdGlvbjogcmVsYXRpdmU7DQogIGRpc3BsYXk6IGZsZXg7DQogIGZsZXgtc2hyaW5rOiAwOw0KICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7DQogIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsNCiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7DQogIHBhZGRpbmc6IDE2cHg7DQogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjOWZkMmZmLCB0cmFuc3BhcmVudCk7DQogIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7DQp9DQouZ3B0Q2hhdFdpZGdldF9jaGF0SGVhZGVyID4gKiB7DQogIG1hcmdpbi1ibG9jazogMDsNCiAgbWFyZ2luLWlubGluZTogMDsNCn0NCi5ncHRDaGF0V2lkZ2V0X2NoYXRIZWFkZXIgPiAqOm5vdCg6bGFzdC1jaGlsZCkgew0KICBtYXJnaW4tYm90dG9tOiA4cHg7DQp9DQouZ3B0Q2hhdFdpZGdldF9jaGF0SGVhZGVyIC5ncHRDaGF0V2lkZ2V0X2xvZ28gew0KICB3aWR0aDogMjRweDsNCiAgaGVpZ2h0OiAyNHB4Ow0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdEhlYWRlciAuZ3B0Q2hhdFdpZGdldF9jbG9zZSB7DQogIHdpZHRoOiAxNnB4Ow0KICBoZWlnaHQ6IDE2cHg7DQogIGN1cnNvcjogcG9pbnRlcjsNCiAgcG9zaXRpb246IGFic29sdXRlOw0KICB0b3A6IDE2cHg7DQogIHJpZ2h0OiAxNnB4Ow0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdEhlYWRlciBoMSB7DQogIGZvbnQtc2l6ZTogMTZweDsNCiAgZm9udC13ZWlnaHQ6IDUwMDsNCiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsNCiAgY29sb3I6ICM3Nzc3Nzc7DQp9DQouZ3B0Q2hhdFdpZGdldF9jaGF0SGVhZGVyIGgyIHsNCiAgZm9udC1zaXplOiAxNnB4Ow0KICBmb250LXdlaWdodDogNTAwOw0KICBjb2xvcjogIzFGMUYxRjsNCn0NCi5ncHRDaGF0V2lkZ2V0X2NoYXRNZXNzYWdlcyB7DQogIGRpc3BsYXk6IGZsZXg7DQogIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDsNCiAgcGFkZGluZzogMTZweDsNCiAgZmxleDogMTsNCiAgb3ZlcmZsb3cteTogYXV0bzsNCiAgb3ZlcmZsb3cteDogaGlkZGVuOw0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhciB7DQogIHdpZHRoOiA0cHg7DQogIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50Ow0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7DQogIHdpZHRoOiA0cHg7DQogIGJvcmRlci1yYWRpdXM6IDJweDsNCiAgYmFja2dyb3VuZDogI0QwRDBEMDsNCiAgY3Vyc29yOiBkZWZhdWx0Ow0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VzIC5ncHRDaGF0V2lkZ2V0X2NoYXRNZXNzYWdlIHsNCiAgcGFkZGluZzogMTJweDsNCiAgYm9yZGVyLXJhZGl1czogOHB4Ow0KICBmb250LXNpemU6IDE0cHg7DQogIGNvbG9yOiAjMUYxRjFGOw0KICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpOw0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VzIC5ncHRDaGF0V2lkZ2V0X2NoYXRNZXNzYWdlLmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VCb3Qgew0KICBiYWNrZ3JvdW5kOiAjRDBEMEQwOw0KICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0Ow0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VzIC5ncHRDaGF0V2lkZ2V0X2NoYXRNZXNzYWdlLmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2VVc2VyIHsNCiAgYmFja2dyb3VuZDogIzlmZDJmZjsNCiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7DQp9DQouZ3B0Q2hhdFdpZGdldF9jaGF0TWVzc2FnZXMgLmdwdENoYXRXaWRnZXRfY2hhdE1lc3NhZ2U6bm90KDpsYXN0LWNoaWxkKSB7DQogIG1hcmdpbi1ib3R0b206IDEycHg7DQp9DQouZ3B0Q2hhdFdpZGdldF9jaGF0UHJpbnRpbmcgew0KICBkaXNwbGF5OiBub25lOw0KICBwYWRkaW5nOiAxNnB4Ow0KICBmb250LXNpemU6IDE0cHg7DQogIGNvbG9yOiAjNzc3Nzc3Ow0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdFByaW50aW5nLmdwdENoYXRXaWRnZXRfY2hhdFByaW50aW5nQWN0aXZlIHsNCiAgZGlzcGxheTogZmxleDsNCn0NCi5ncHRDaGF0V2lkZ2V0X2NoYXRQcmludGluZy5ncHRDaGF0V2lkZ2V0X2NoYXRQcmludGluZ0FjdGl2ZTphZnRlciB7DQogIGNvbnRlbnQ6ICcnOw0KICBhbmltYXRpb246IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBkb3RzOw0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdEZvb3RlciB7DQogIGRpc3BsYXk6IGZsZXg7DQogIGZsZXgtZmxvdzogcm93IG5vd3JhcDsNCiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOw0KICBwYWRkaW5nOiAxNnB4Ow0KICBib3JkZXItdG9wOiAxcHggc29saWQgI0QwRDBEMDsNCiAgZmxleC1zaHJpbms6IDA7DQp9DQouZ3B0Q2hhdFdpZGdldF9jaGF0Rm9vdGVyIHRleHRhcmVhIHsNCiAgcmVzaXplOiBub25lOw0KICBmbGV4OiAxOw0KICBmb250LXNpemU6IDE0cHg7DQogIGxpbmUtaGVpZ2h0OiAxOHB4Ow0KICBwYWRkaW5nOiAwOw0KICBtaW4taGVpZ2h0OiAzNnB4Ow0KICBib3JkZXI6IG5vbmU7DQogIG91dGxpbmU6IG5vbmU7DQogIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50Ow0KfQ0KLmdwdENoYXRXaWRnZXRfY2hhdEZvb3RlciB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIgew0KICB3aWR0aDogNHB4Ow0KICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsNCn0NCi5ncHRDaGF0V2lkZ2V0X2NoYXRGb290ZXIgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsNCiAgd2lkdGg6IDRweDsNCiAgYm9yZGVyLXJhZGl1czogMnB4Ow0KICBiYWNrZ3JvdW5kOiAjRDBEMEQwOw0KICBjdXJzb3I6IGRlZmF1bHQ7DQp9DQouZ3B0Q2hhdFdpZGdldF9jaGF0Rm9vdGVyIHRleHRhcmVhLmdwdENoYXRXaWRnZXRfc2hhZG93VGV4dGFyZWEgew0KICBwb3NpdGlvbjogYWJzb2x1dGU7DQogIHotaW5kZXg6IC0xOw0KICBvcGFjaXR5OiAwOw0KfQ0KQGtleWZyYW1lcyBkb3RzIHsNCiAgMCUgew0KICAgIGNvbnRlbnQ6ICcnOw0KICB9DQogIDI1JSB7DQogICAgY29udGVudDogJy4nOw0KICB9DQogIDUwJSB7DQogICAgY29udGVudDogJy4uJzsNCiAgfQ0KICA3NSUgew0KICAgIGNvbnRlbnQ6ICcuLi4nOw0KICB9DQogIDEwMCUgew0KICAgIGNvbnRlbnQ6ICcnOw0KICB9DQp9'
const socketLink = 'wss://chat.kutkh.co/ws/chat/'

let widget, shadowTextarea, mainTextarea, chatMessages, chatPrinting, webSocket

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
  }
  chatMessages.scrollTo(0, chatMessages.scrollHeight)
}

const ping = e => {
  chatPrinting.classList.add('gptChatWidget_chatPrintingActive')
  // setInterval(() => e.target.send('ping'), 5000)
}

const openChat = () => {
  if (!webSocket || webSocket.readyState !== WebSocket.OPEN) {
    // const chatId = window.localStorage.getItem('gptChatWidget_chatId') || randomString(64)
    const chatId = 'gpt' + randomString(48)
    window.localStorage.setItem('gptChatWidget_chatId', chatId)
    webSocket = new WebSocket(socketLink + chatId + '/')
    webSocket.addEventListener('open', ping)
    webSocket.addEventListener('message', e => {
      const data = JSON.parse(e.data)
      newMessage(data)
    })
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

/*
  initMessages.forEach(item => {
    const chatMessage = document.createElement('div')
    chatMessage.classList.add('gptChatWidget_chatMessage')
    chatMessage.classList.add(item.from === 'bot' ? 'gptChatWidget_chatMessageBot' : 'gptChatWidget_chatMessageUser')
    chatMessage.innerText = item.message
    chatMessages.append(chatMessage)
  })
*/

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

  const chatTitle2 = document.createElement('h2')
  chatTitle2.innerText = 'Как я могу помочь?'
  chatHeader.append(chatTitle2)

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