# Sito web del concorso "I corti di Librogame's Land"

Il sito è stato scritto in html + css puro e non fa uso di javascript client side. Il codice sorgente è costituito da un template che viene compilato con PostHTML, in cui viene inserita automaticamente la lista dei file presenti in archivio.


## Compilazione
Dopo ogni modifica del sito (aggiunta di un file all'archivio o modifica del template), è necessario compilarlo tramite lo script `build.js` (richiede node.js e npm installati sul proprio computer).
```bash
# Clona repository e installa i pacchatti npm
git clone https://github.com/librogamesland/corti.git
cd corti/sito
npm i


# Genera il sito a partire da src/
npm run build

```

Per facilitare il compito agli sviluppatori, è stato inserito un file `serve.js` che apre la pagina sul browser e a ogni modifica dei file ricompila il sito ed effettua automaticamente un refresh
```
npm run serve
```



## Licenza
Il sito è di proprietà di Librogame's Land. Tutti i diritti riservati.

L'autore principale è Luca Fabbian, email [luca.fabbian.1999@gmail.com](mailto:luca.fabbian.1999@gmail.com).
