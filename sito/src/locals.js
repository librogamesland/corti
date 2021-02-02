/* Tutti i vari testi da inserire all'interno del sito
vengono caricati dal plugin posthtml-expression (file: posthtml.config.js) */
import {elenco, archivio} from './elenco.js'


// Messaggio home del sito
const home = `
<h1 class="only-desktop">Chi siamo?<hr></h1>
<p>"I corti di <a href="http://librogame.net" rel="noopener" target="_blank">Librogame's Land</a>" è il
più grande concorso italiano dedicato ai racconti interattivi.</p>

<p>Gestito dalla community con il supporto delle case editrici del settore, il concorso consente agli autori
di sfidarsi su un tema che cambia di anno in anno, sottoponendo i propri racconti brevi e brevissimi al giudizio
del pubblico. Attualmente è in corso la <b>13sima edizione</b> del concorso.</p>

<p>A partire da giovedì <b>4 febbraio</b>, sarà possibile scaricare i 29 racconti in gara quest'anno.</p>
<p>Bando edizione 2021:
<a href="https://bit.ly/corti2021"  rel="noopener" target="_blank" download>bando.pdf</a></p>
`


// Descrizione archivio
const descrizioneArchivio = `
L'archivio dei corti
`


// Footer
const footer = `<p>@ 2021 Librogame's Land</p>`



export {home, descrizioneArchivio, footer, archivio}