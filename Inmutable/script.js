const videojuegos = Object.freeze([
        { "id": 1, "nombre": "The Legend of Zelda: Breath of the Wild", "genero": "aventura", "plataforma": "Nintendo Switch" },
        { "id": 2, "nombre": "Super Mario Odyssey", "genero": "plataformas", "plataforma": "Nintendo Switch" },
        { "id": 3, "nombre": "Red Dead Redemption 2", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 4, "nombre": "The Witcher 3: Wild Hunt", "genero": "RPG", "plataforma": "PC" },
        { "id": 5, "nombre": "Fortnite", "genero": "battle royale", "plataforma": "multiplataforma" },
        { "id": 6, "nombre": "Minecraft", "genero": "sandbox", "plataforma": "multiplataforma" },
        { "id": 7, "nombre": "Overwatch", "genero": "shooter", "plataforma": "multiplataforma" },
        { "id": 8, "nombre": "FIFA 20", "genero": "deportes", "plataforma": "multiplataforma" },
        { "id": 9, "nombre": "Super Smash Bros. Ultimate", "genero": "lucha", "plataforma": "Nintendo Switch" },
        { "id": 10, "nombre": "League of Legends", "genero": "MOBA", "plataforma": "PC" },
        { "id": 11, "nombre": "God of War", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 12, "nombre": "Animal Crossing: New Horizons", "genero": "simulación", "plataforma": "Nintendo Switch" },
        { "id": 13, "nombre": "Call of Duty: Warzone", "genero": "shooter", "plataforma": "multiplataforma" },
        { "id": 14, "nombre": "Cyberpunk 2077", "genero": "acción-RPG", "plataforma": "multiplataforma" },
        { "id": 15, "nombre": "Assassin's Creed Valhalla", "genero": "acción-aventura", "plataforma": "multiplataforma" },
        { "id": 16, "nombre": "Among Us", "genero": "party", "plataforma": "multiplataforma" },
        { "id": 17, "nombre": "Pokémon Sword and Shield", "genero": "RPG", "plataforma": "Nintendo Switch" },
        { "id": 18, "nombre": "Genshin Impact", "genero": "acción-RPG", "plataforma": "multiplataforma" },
        { "id": 19, "nombre": "Valorant", "genero": "shooter táctico", "plataforma": "PC" },
        { "id": 20, "nombre": "Death Stranding", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 21, "nombre": "Spider-Man: Miles Morales", "genero": "acción-aventura", "plataforma": "PlayStation 5" },
        { "id": 22, "nombre": "Hades", "genero": "roguelike", "plataforma": "PC" },
        { "id": 23, "nombre": "Overcooked! 2", "genero": "cooperativo", "plataforma": "multiplataforma" },
        { "id": 24, "nombre": "Sekiro: Shadows Die Twice", "genero": "acción-aventura", "plataforma": "multiplataforma" },
        { "id": 25, "nombre": "Rainbow Six Siege", "genero": "shooter táctico", "plataforma": "multiplataforma" },
        { "id": 26, "nombre": "Grand Theft Auto V", "genero": "acción-aventura", "plataforma": "multiplataforma" }
    ]);

// Filtrar juegos de aventura o acción-aventura
const juegosAventura = videojuegos.filter(juego => juego.genero === "aventura" || juego.genero === "acción-aventura");
console.log(juegosAventura);

// Obtener los nombres de los juegos
const nombresJuegos = videojuegos.map(juego => juego.nombre);
console.log(nombresJuegos);

//  Videojuegos con ID divisible uniformemente por 3
const idDivisiblePor3 = videojuegos.filter(juego => juego.id % 3 === 0);
console.log("ID divisible por 3:", idDivisiblePor3);

//  Videojuegos del género "acción-RPG"
const accionRPG = videojuegos.filter(juego => juego.genero === "acción-RPG");
console.log("Acción-RPG:", accionRPG);

//  Videojuegos que tienen más de un género 
const multiplesGeneros = videojuegos.filter(juego => juego.genero.includes('-'));
console.log("Múltiples géneros:", multiplesGeneros);

//  Lista con los nombres de los videojuegos
const nombres = videojuegos.map(juego => juego.nombre);
console.log("Nombres:", nombres);

//  Nombres de videojuegos con ID superior a 19
const nombresIdMayor19 = videojuegos
    .filter(juego => juego.id > 19)
    .map(juego => juego.nombre);
console.log("Nombres ID > 19:", nombresIdMayor19);

//  Nombres de videojuegos cuyo único género es "shooter"
const shooterUnico = videojuegos
    .filter(juego => juego.genero === "shooter")
    .map(juego => juego.nombre);
console.log("Shooter único:", shooterUnico);


// Conteo de videojuegos del género "party"
const conteoParty = videojuegos.filter(juego => juego.genero === "party").length;
console.log("Conteo party:", conteoParty);

// Videojuegos excepto aquellos con ID múltiplo de 5
const sinMultiplos5 = videojuegos.filter(juego => juego.id % 5 !== 0);
console.log("Sin múltiplos de 5:", sinMultiplos5);

//  Videojuegos con género cambiado para ID 5
const videojuegosModificados = videojuegos.map(juego => 
    juego.id === 5 ? { ...juego, genero: "otro" } : juego
);
console.log("Con género modificado ID 5:", videojuegosModificados);

// Bonus: Verificar que el original no fue modificado
console.log("Original intacto:", videojuegos[4].genero === "battle royale");


