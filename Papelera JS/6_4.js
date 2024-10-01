const cursos =[
    {nombre: "JavaScript" , duracion:8 , precio:15000},
    {nombre: "React" , duracion:7 , precio:16500},
    {nombre: "Angular" , duracion:9 , precio:17200},
    {nombre: "Vue" , duracion:8 , precio:16000},
    {nombre: "Svelte" , duracion:6 , precio:14000},
    {nombre: "React Native" , duracion:10 , precio:19500}
]

const nombres = cursos.map(curso => curso.nombre)
console.log(nombres)

const actualizados = cursos.map(curso => {
    return {
        nombre: curso.nombre,
        duracion: curso.duracion,
        precio: curso.precio * 1.25
    }
})
console.log(actualizados)

const numeros = [1,2,3,4,5,6]
const total = numeros.reduce((acc, el) => acc + el , 0)
console.log(total)