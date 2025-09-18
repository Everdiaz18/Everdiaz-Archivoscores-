// conversor de temperatura 
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log(celsiusToFahrenheit(26));

// saludo de Juan

const saludo = (nombre, edad) => 
    nombre && typeof edad === "number" && edad >= 0 
    ? `Hola ${nombre}, tienes ${edad} años de edad.`
    : 'Datos inválidos';

console.log(saludo("juan", 30))

// conversion de millas a kilometros

const convercionakilmetros =(millas) => millas * 1.60934;
console.log(convercionakilmetros(1))



// consejo de clima
const consejoClima = (clima) => 
    clima === "lluvioso" ? "Llevar un paraguas":
    clima === "soleado" ? "Llevar un sombrero y protector solar " :
    clima === "nublado" ? "Un suéter ligero podría ser buena idea " :
    clima === "nevado" ? "Abrígate bien y usa botas  " :
    clima === "ventoso" ? "Usa una chaqueta resistente al viento " :
    "Clima no reconocido, mejor verifica el pronóstico";

console.log(consejoClima("lluvioso"))
console.log(consejoClima("Soleado"))