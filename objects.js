let miAuto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo}, Marca: ${this.marca}, Año ${this.annio}`)
    }
}

function auto(marca, modelo, annio){
    this.marca = marca
    this.modelo = modelo
    this.annio = annio
}

miAuto.annio