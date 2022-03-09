//var Emitter = require("./emitter.js");
var Emitter = require("events"); //Aquí se inyecta la dependencia propia de de NODE JS.

let config = require("./config.js");/*Aquí se inyecta la dependencia del archivo que nos va a ayudar
a evitar errores de typo al momento de referenciar algun valor o función, este archivo contiene el mapeo 
de greet y jump y garantiza no cometer erroes al momento de referenciarlos ya que después de poner el
punto, se autocompleta. */

var emtr = new Emitter();

emtr.on(config.events.GREETING,() =>{
    console.log("Somewhere, someone said hello.")
});

emtr.on(config.events.GREETING,()=>{
    console.log("A greeting ocurred!")
});

console.log("Hello!");
emtr.emit("greet");

/* Al tener dos funciones llamadas de la misma manera, al intentar que nos devuelva una con ese nombre, ambas funciones son devueltas
debido a que el nombre aplica y es el mismo para las dos.*/

emtr.on(config.events.JUMP, ()=>{
    console.log("someone jumped!");
});

//console.log(emtr);
emtr.emit("jump");

/* Al imprimir tal cual "emtr", se devuelve el contenido sin ejecución de funciones, además se pueden apreciar en la impresión, los dos
eventos llamados "greet" que comparten el nombre. */
