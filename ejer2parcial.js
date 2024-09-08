// Angel Gustavo Pimentel Amaya

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let peliculas = [
  { titulo: 'Inception', genero: 'Ciencia Ficción' },
  { titulo: 'Hannibal', genero: 'Crimen' },
  { titulo: 'Como Entrenar Tu Dragon', genero: 'Animación' },
  { titulo: 'Parasite', genero: 'Drama' },
  { titulo: 'Mision Rescate', genero: 'Acción' }
];

rl.question('Ingrese el género de película que desea ver: ', function(generoDeseado) {
  
  let peliculaRecomendada = peliculas.find(pelicula => pelicula.genero.toLowerCase() === generoDeseado.toLowerCase());

  if (peliculaRecomendada) {
    console.log(`Te recomendamos ver: ${peliculaRecomendada.titulo}`);
  } else {
    console.log('No hay películas disponibles para el género seleccionado.');
  }

  rl.close(); 
});
