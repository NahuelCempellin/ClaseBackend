console.log("hola mundo")


//Declaracion de variables
var myvar : string = 'Hola mundo'
var mynum: number = 2
var bool: boolean = true
var Arr :[]= []
var An : any = {}
var Voi : void 


//Array y tuplas
var newArr : string[] = ["puto", "hola"]
var newNumArr :number[] = [1,2,3]
var tup : [string, number] = ["", 2]


//Objetos
interface persona {
    nombre: string,
    apellido: string,
    dni: number,
    sexo: string
}

var obj: persona = {
    nombre: "Maxi",
    apellido: "Latapie",
    dni: 21312321,
    sexo: "muy rico"
}


function Person ({nombre, apellido, dni, sexo}): persona{
    
    return obj
}


type parseQ = { nombre: string, apellido: string, dni: string, sexo: string }
type Dates = {dia: string ,  mes: string, año: string }

function getDate (dates: Dates) {
    console.log(dates.dia)
    return dates.dia
}

getDate({dia: "lunes" , mes: "febrero", año: "1998"})
