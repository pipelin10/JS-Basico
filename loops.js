let estudiantes = ['Maria','Sergio','David']

function saludarEstudiantes(nombreEstudiante){
    console.log(`Hola, ${nombreEstudiante}`)
}

for(let i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

for(let estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}

// while(estudiantes.length > 0){
//     let estudiante = estudiantes.shift()
//     saludarEstudiantes(estudiante)
// }

do{
    let estudiante = estudiantes.shift()
    saludarEstudiantes(estudiante)
}while(estudiantes.length > 0)