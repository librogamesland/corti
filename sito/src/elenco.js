import fs from 'fs'
import path from 'path'


const baseUrl="https://librogamesland.github.io/corti/"


// Elenca le edizioni
const elenco = {}
const rootFolder = path.dirname(path.dirname(__dirname))
// Filtra le cartelle, prendi solo quelle che iniziano con 2
fs.readdirSync(rootFolder).filter(anno => anno.startsWith('2') ).forEach(anno => {
    // Elenca i corti se la cartella esiste
    let corti = []
    try { corti = fs.readdirSync(path.join(rootFolder, anno, 'corti'))
    }catch(e){}
    
    // Fa un elenco delle altre risorse
    const files = fs.readdirSync(path.join(rootFolder, anno)).filter(item => item != 'corti')
    elenco[anno] = {corti, files}
});



const archivio = 
'<select aria-label="Seleziona edizione" class="only-mobile" onchange="document.getElementById(this.value).checked = true">' +
Object.keys(elenco).sort().reverse().map( (key, i) => 
  `<option value="option${key}">Edizione ${key}</option>`
).join('/n') + '</select>' +

'<div class="labels only-desktop">' +
Object.keys(elenco).sort().reverse().map( (key,i) => 
  `<label for="option${key}">${key}</label>`
).join('\n') + '</div><div class="sections">'

+ Object.keys(elenco).sort().reverse().map( (key,i) =>
  `<section id="section${key}">
  <input type="radio" name="sections" id="option${key}" ${i == 0 ? 'checked':''}>
  <article>
    <h2 class="only-desktop">Edizione ${key}</h2>
    <table style="margin-bottom: 20px">
    ${!(elenco[key].files.includes('libro.pdf')) ? '' :
    `<tr><td><a href="${baseUrl + key + '/libro.pdf'}"  rel="noopener" target="_blank">Libro dei corti ${key}</a></td></tr>`  
    }

    ${!(elenco[key].files.includes('bando.pdf')) ? '' :
    `<tr><td><a href="${baseUrl + key + '/bando.pdf'}"  rel="noopener" target="_blank">Bando edizione ${key}</a></td></tr>`  
    }
    </table>
    ${!('corti' in elenco[key]) ? '' : `<table>${
      elenco[key].corti.map(corto => 
        `<tr><td><a href="${baseUrl + key + '/corti/' + corto}"  rel="noopener" target="_blank">${corto}</a></td></tr>`  
      ).join('\n')
    } </table>`}
  </article>
</section>`
).join('\n') + '</div>'

  
export {elenco, archivio}