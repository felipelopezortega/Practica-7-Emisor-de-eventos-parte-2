//var Emitter = require("./emitter.js");
var Emitter = require("events"); //Aquí se inyecta la depencia propia de de NODE JS.

var emtr = new Emitter();

emtr.on("greet",() =>{
    console.log("Somewhere, someone said hello.")
});

emtr.on("greet",()=>{
    console.log("A greeting ocurred!")
});

console.log("Hello!");
emtr.emit("greet");

/* Al tener dos funciones llamadas de la misma manera, al intentar que nos devuelva una con ese nombre, ambas funciones son devueltas
debido a que el nombre aplica y es el mismo para las dos.*/

emtr.on("jump", ()=>{
    console.log("someone jumped!");
});

//console.log(emtr);
emtr.emit("jump");

/* Al imprimir tal cual "emtr", se devuelve el contenido sin ejecución de funciones, además se pueden apreciar en la impresión, los dos
eventos llamados "greet" que comparten el nombre. */
