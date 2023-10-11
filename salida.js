console.log("hola mundo");
//Declaracion de variables
var myvar = 'Hola mundo';
var mynum = 2;
var bool = true;
var Arr = [];
var An = {};
var Voi;
//Array y tuplas
var newArr = ["puto", "hola"];
var newNumArr = [1, 2, 3];
var tup = ["", 2];
var obj = {
    nombre: "Maxi",
    apellido: "Latapie",
    dni: 21312321,
    sexo: "muy rico"
};
function Person(_a) {
    var nombre = _a.nombre, apellido = _a.apellido, dni = _a.dni, sexo = _a.sexo;
    return obj;
}
function getDate(dates) {
    console.log(dates.dia);
    return dates.dia;
}
getDate({ dia: "lunes", mes: "febrero", año: "1998" });
