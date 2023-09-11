const cervezasAlcohos = (cervezas) => cervezas.sort((a,b)=> b.abv - a.abv).slice(0,10);
console.log(cervezasAlcohos(beers));