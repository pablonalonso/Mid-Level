let href = window.location.href;
let hostName = window.location.hostname;
let protocol = window.location.protocol;
let pathName = window.location.pathname;

let html = `
href: <b>${href}</b><br>
Host Name: <b>${hostName}</b><br>
Protocolo: <b>${protocol}</b><br>
Path Name: <b>${pathName}</b><br>
`

document.write(html)