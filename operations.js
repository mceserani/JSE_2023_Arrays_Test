
// Funzione che calcola e restituisce la somma tra due vettori
function vectorAddition(a, b) {
    if (a.length != b.length)
      return "I due vettori devono avere la stessa lunghezza!";
    let s = [];
    for(let i = 0; i < a.length; i++){
      s[i] = a[i] + b[i];
    }
    return s;
  }
  
  // Funzione che calcola e restituisce il prodotto scalare tra due vettori
  function dotProduct(a, b) {
    if (a.length != b.length)
      return "I due vettori devono avere la stessa lunghezza!";
    let p = 0;
    for(let i = 0; i < a.length; i++){
      p += a[i]*b[i];
    }
    return p;
  }
  
  // Funzione che calcola e restituisce la norma di un vettore
  function norm(a) {
    let n = 0;
    for(let i = 0; i < a.length; i++){
      n += a[i]**2;
    }
    return Math.sqrt(n);
  }
  
  // Funzione che calcola e restituisce il prodotto vettoriale tra due vettori di dimensione 3
  function crossProduct(a, b) {
    if (a.length != 3 || b.length != 3)
      return "I due vettori devono essere di dimensione 3!";
    let p = [];
    p[0] = a[1]*b[2] - a[2]*b[1];
    p[1] = a[2]*b[0] - a[0]*b[2];
    p[2] = a[0]*b[1] - a[1]*b[0];
    return p;
  }
  
  // Funzione che calcola e restituisce la media di un vettore
  function mean(a) {
    if (a.length == 0)
      return 0;
    let m = 0;
    for(let i = 0; i < a.length; i++){
      m += a[i];
    }
    return m/a.length;
  }
  
  // Funzione che calcola e restituisce la mediana di un vettore
  function median(a) {
    if (a.length == 0)
      return 0;
    let m = a.sort();
    if (m.length % 2)
      return m[Math.floor(m.length/2)];
    else
      return (m[m.length/2] + m[m.length/2-1])/2; 
  }
  
  // Funzione che calcola e restituisce i valori minimo e massimo di un vettore
  function minMax(a) {
    let min = a[0];
    let max = a[0];
    for(let i = 1; i < a.length; i++){
      if (a[i] < min)
        min = a[i];
      if (a[i] > max)
        max = a[i];
    }
    return [min, max];
}

module.exports = {
    vectorAddition,
    dotProduct,
    norm,
    crossProduct,
    mean,
    median,
    minMax
}
