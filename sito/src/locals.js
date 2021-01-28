/* Tutti i vari testi da inserire all'interno del sito
vengono caricati dal plugin posthtml-expression (file: posthtml.config.js) */

// Messaggio home del sito
const home = `
<h1 class="only-desktop">Chi siamo?<hr></h1>
<p>"I corti di <a href="http://librogame.net" target="_blank">Librogame's Land</a>" è il
più grande concorso italiano dedicato ai racconti interattivi.</p>

<p>Gestito dalla community con il supporto delle case editrici del settore, il concorso consente agli autori
di sfidarsi su un tema che cambia di anno in anno, sottoponendo i propri racconti brevi e brevissimi al giudizio
del pubblico.</p>

<p>Attualmente è in corso la <b>13sima edizione</b> del concorso. Gli autori hanno tempo fino 
al <b>31/01/2021</b> per consegnare le proprie opere.</p>
<p>Bando con le istruzioni su come partecipare:
<a href="https://bit.ly/corti2021" target="_blank" download>bando.pdf</a></p>
`



// Descrizione archivio
const descrizioneArchivio = `
L'archivio dei corti
`



// Footer
const footer = `<p>@ 2021 Librogame's Land</p>`


const {elenco, archivio} = require(__dirname + '/elenco.js')

module.exports = {home, descrizioneArchivio, footer, archivio}