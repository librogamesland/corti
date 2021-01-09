console.log("hellonnmm")
import {ultimeNews, archivio} from '../ultime-news.js'


window.addEventListener("load", function(event) {
    console.log("Tutte le risorse hanno terminato il caricamento!");
    document.getElementById('ultime-news').innerHTML = ultimeNews

  });
