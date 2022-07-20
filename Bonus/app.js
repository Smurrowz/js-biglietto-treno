// chiedo l'eta' del passeggero

const etaPasseggero = parseInt(prompt('quanti anni hai?') ); 
console.log(etaPasseggero);

// chiedo i km che il passeggero deve percorrere

const kmPasseggero = parseInt(prompt('mi dici il numero di km che devi percorrere?') ) ;
console.log(kmPasseggero);

// setto la tariffa

const prezzoAlKm = 0.21;

// calcolo il prezzo finale

let prezzoFinale;

if (isNaN(etaPasseggero) || isNaN(kmPasseggero)) {
  console.log('inserisci dei dati corretti') 
  prezzo.innerHTML = 'inserisci dei dati corretti altrimenti ti spezzo le gambe';
  
}else{
  if (etaPasseggero < 18) {
    console.log('il passeggero e minorenne');
    const prezzoBase = prezzoAlKm * kmPasseggero;
    prezzoFinale = prezzoBase - (prezzoBase * 0.2).toFixed(2);
    console.log('il costo del biglietto e:€ ' + prezzoFinale);
    
  } else if ( etaPasseggero > 65) {
    console.log('il passeggero e over65');
    const prezzoBase = prezzoAlKm * kmPasseggero;
    prezzoFinale = prezzoBase - (prezzoBase * 0.4).toFixed(2);
    console.log('il costo del biglietto e:€ ' + prezzoFinale);
    
  } else {
    console.log('il passeggero non ha diritto a nessuno sconto');
    const prezzoBase = prezzoAlKm * kmPasseggero;
    prezzoFinale = prezzoBase.toFixed(2);
    console.log('il costo del biglietto e:€ ' + prezzoFinale);
    
  }
  prezzo.innerHTML = 'il prezzo del tuo biglietto è: €' + prezzoFinale;
  
}



