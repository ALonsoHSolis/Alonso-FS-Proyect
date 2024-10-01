const items = [
    { name:"Pikachu" , price:21},
    { name:"Charmander", price: 37},
    {name:"Pidgey", price: 45},
    {name:"Squirtle", price: 60}
]

items.sort((a,b) =>{
    if (a.name > b.name)
        return 1
    if (a.name < b.name)
        return -1
    return 0
})

function burbuja(){
    const lista = [389,703,247,563,224,714,464,953,708,201,887,550,515,206,131]
    console.log(lista)

    const n = lista.length
    for (let k=1; k < n; k++ ){
        for(let i = 0; i< (n - k); i++){
            if(lista[i]>lista[i + 1]){
                const aux = lista[i]
                lista[i] = lista[i + 1]
                lista[i + 1] = aux
               
            }
        }
    }
console.log(lista)
}

burbuja()