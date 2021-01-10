console.log("hellonnmm")
import elencoFile from '../elenco-file.json'
import {ultimeNews, archivio} from '../ultime-news.js'


console.log(elencoFile['2021'].corti)

const baseUrl="https://librogamesland.github.io/corti/"

const testoArchivio = Object.keys(elencoFile).sort().reverse().map( (key,i) =>
  `<section id="section${key}">
  <input type="radio" name="sections" id="option${key}" ${i == 0 ? 'checked':''}>
  <label for="option${key}">${key}</label>
  <article>
    <h2>Edizione ${key}</h2>
    <table style="margin-bottom: 20px">
    ${!(elencoFile[key].files.includes('libro.pdf')) ? '' :
    `<tr><td><a href="${baseUrl + key + '/libro.pdf'}" target="_blank">Libro dei corti ${key}</a></td></tr>`  
    }

    ${!(elencoFile[key].files.includes('bando.pdf')) ? '' :
    `<tr><td><a href="${baseUrl + key + '/bando.pdf'}" target="_blank">Bando edizione ${key}</a></td></tr>`  
    }
    </table>
    ${!('corti' in elencoFile[key]) ? '' : `<table>${
      elencoFile[key].corti.map(corto => 
        `<tr><td><a href="${baseUrl + key + '/corti/' + corto}" target="_blank">${corto}</a></td></tr>`  
      ).join('\n')
    } </table>`}
    <div style="height: 70px;"></div>

  </article>
</section>`
).join('\n')


window.addEventListener("load", function(event) {
    console.log("Tutte le risorse hanno terminato il caricamento!");
    document.getElementById('ultime-news').innerHTML = ultimeNews
    document.getElementById('tab-archivio').innerHTML = testoArchivio

  });
