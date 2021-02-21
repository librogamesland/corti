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


const votazioni = {
  "01-[Dedalo-Re:loaded].pdf": "https://www.facebook.com/cortiLGL/posts/117281443664436",
  "02-Arriverai-qui.pdf": "https://www.facebook.com/cortiLGL/posts/117281743664406",
  "03-BlueScreens.pdf": "https://www.facebook.com/cortiLGL/posts/117281910331056",
  "04-Demoniache-presenze.pdf" : "https://www.facebook.com/cortiLGL/posts/117282053664375",
  "05-DESLAGRATE-La-magia esiste.pdf" : "https://www.facebook.com/cortiLGL/posts/117282176997696",
  "06-Dopo-cena.pdf" : "https://www.facebook.com/cortiLGL/posts/117282290331018",
  "07-Eidolon.pdf" : "https://www.facebook.com/cortiLGL/posts/117283340330913",
  "08-Escape-Labirinto-Infernale.pdf" : "https://www.facebook.com/cortiLGL/posts/117283603664220",
  "09-Figlio-di-Due-Piani.pdf" : "https://www.facebook.com/cortiLGL/posts/117283776997536",
  "10-Filastrocca-game.pdf" : "https://www.facebook.com/cortiLGL/posts/117283860330861",
  "11-Fuoco-Alieno.pdf" : "https://www.facebook.com/cortiLGL/posts/117283970330850",
  "12-Fuori-Concorso.pdf" : "https://www.facebook.com/cortiLGL/posts/117284040330843",
  "13-Goblin.pdf" : "https://www.facebook.com/cortiLGL/posts/117284116997502",
  "14-Guerre-e-distruzione.pdf" : "https://www.facebook.com/cortiLGL/posts/117284233664157",
  "15-Il-Precetto-Finale.pdf" : "https://www.facebook.com/cortiLGL/posts/117284420330805",
  "16-Il-varco-oscuro.pdf" : "https://www.facebook.com/cortiLGL/posts/117284653664115",
  "17-InOut.pdf" : "https://www.facebook.com/cortiLGL/posts/117284710330776",
  "18-La-deviazione.pdf" : "https://www.facebook.com/cortiLGL/posts/117284770330770",
  "19-Lasciami-andare.pdf" : "https://www.facebook.com/cortiLGL/posts/117284923664088",
  "20-Le-ombre-del-mio-gatto.pdf" : "https://www.facebook.com/cortiLGL/posts/117285000330747",
  "21-L'Eroe-dei-Due-Mondi.pdf" : "https://www.facebook.com/cortiLGL/posts/117285133664067",
  "22-Morte-agli-spaghetti.pdf" : "https://www.facebook.com/cortiLGL/posts/117285223664058",
  "23-Nel-nome-dell'imperatore.pdf" : "https://www.facebook.com/cortiLGL/posts/117285400330707",
  "24-Ocram.pdf" : "https://www.facebook.com/cortiLGL/posts/117285510330696",
  "25-Operazione-Valkyrja.pdf" : "https://www.facebook.com/cortiLGL/posts/117285563664024",
  "26-P-616.pdf" : "https://www.facebook.com/cortiLGL/posts/117285710330676",
  "27-Superfire-Pro-Fighter-Premium-Version.pdf" : "https://www.facebook.com/cortiLGL/posts/117285836997330",
  "28-Viaggio-nell'Immanenza.pdf" : "https://www.facebook.com/cortiLGL/posts/117286000330647",
  "29-Vinland-Saga-2.pdf" : "https://www.facebook.com/cortiLGL/posts/117286090330638",
}


const voteButton = (edizione, corto) => { 
  if(edizione != '2021') return ""
  if(! (corto in votazioni)) return ""
  return `<a href="${votazioni[corto]}" class="button vote" rel="noopener" target="_blank">Vota<img src="sito/res/link.svg" alt="(link esterno)"height="12px" style="margin-left: 7px;"></a>`
}


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
      elenco[key].corti.sort( (a,b) => a.replace(".pdf","").localeCompare(b.replace(".pdf", "")) ).map(corto => 
        `<tr><td><a href="${baseUrl + key + '/corti/' + corto}"  rel="noopener" target="_blank">${corto}</a>${voteButton(key, corto)}</td></tr>`  
      ).join('\n')
    } </table>`}
  </article>
</section>`
).join('\n') + '</div>'

  
export {elenco, archivio}