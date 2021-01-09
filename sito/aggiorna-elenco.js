const fs = require('fs');
const path= require('path')


const elenco = {}


// Elenca le edizioni
// Filtra le cartelle, prendi solo quelle che iniziano con 2
fs.readdirSync(path.dirname(__dirname)).filter(anno => anno.startsWith('2') ).forEach(anno => {
    // Elenca i corti se la cartella esiste
    let corti = []
    try {
        corti = fs.readdirSync(path.join(path.dirname(__dirname), anno, 'corti'))
    }catch(e){}
    
    // Fa un elenco delle altre risorse
    const files = fs.readdirSync(path.join(path.dirname(__dirname), anno, )).filter(item => item != 'corti')

    elenco[anno] = {corti, files}
});
  
// Scrive l'elenco su disco
fs.writeFileSync(path.join(__dirname, 'elenco-file.json'), JSON.stringify(elenco, null, 2));
