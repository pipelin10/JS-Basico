let productos = [
    {
        nombre:"Leche",
        precio:400
    },
    {
        nombre:"Pan",
        precio:600
    },
    {
        nombre:"Mantequilla",
        precio:200
    }
]

// let articulosFiltrados = productos.filter(item => item.precio < 500)
// console.log(articulosFiltrados)

// let articulosMapeados = productos.map(item => {
//     item.nombre,
//     item.precio,
//     calidad = "Buena"
// })
// console.log(articulosMapeados)

// let articulo = productos.find(item => item.precio === 600)
// console.log(articulo)

let articulos = productos.forEach(item => console.log(item.nombre))