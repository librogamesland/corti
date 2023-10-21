/* Tutti i vari testi da inserire all'interno del sito
vengono caricati dal plugin posthtml-expression (file: posthtml.config.js) */
import {elenco, archivio} from './elenco.js'


// Messaggio home del sito
const home = `
<h1 class="only-desktop">Chi siamo?<hr></h1>
<p>"I corti di <a href="http://librogame.net" rel="noopener" target="_blank">Librogame's Land</a>" è il
più grande concorso italiano dedicato ai racconti interattivi (librogame).</p>

<p>Gestito dalla community con il supporto delle case editrici del settore, il concorso consente agli autori
di sfidarsi su un tema che cambia di anno in anno, sottoponendo i propri racconti brevi e brevissimi al giudizio
del pubblico. <p>Per tutte le novità sul concorso vi rimandiamo 
<b>alla pagina <a href="https://facebook.com/cortilgl">Facebook</a> apposita o in alternativa, al <a href="http://www.librogame.net/index.php/forum/forum?id=15">Forum di LGL</a>.
</b></p>

<!--
<h1><a class="button download" style="width:100%; box-sizing:border-box" href="https://bit.ly/corti2021download" rel="noopener" target="_blank" download>Download corti 2021 + soluzioni</a></h1>
</h1>
 <p>Bando edizione 2021:
<a href="https://bit.ly/corti2021"  rel="noopener" target="_blank" download>bando.pdf</a></p> -->
`


// Descrizione archivio
const descrizioneArchivio = `
L'archivio dei corti
`


// Footer
const footer = `<p>@ 2021 Librogame's Land</p>`



export {home, descrizioneArchivio, footer, archivio}
