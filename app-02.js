/*const aplicarDesc = new Promise((resolve, reject) => {
    const descuento = true

    if (descuento) {
        resolve('Descuento Aplicado')
    } else
        reject('No se pudo aplicar el descuento')
})
aplicarDesc
    .then(resultado => {
        console.log(resultado)
    }).catch(error => {
        console.log(error)
    })

console.log(aplicarDesc)

/*Hay 3 posibles valores en las promesas "promise" que son:
resuelto-true
rechazado-false
pending-que aun no se ha cumplido, pero tampoco ha sido ejecutado.
.then (entonces) la accion que se realiza en el promise
 siempre que el promise falle tenemos acceso al .catch
*/
const paises = []
const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(`Agregado ${pais}`)
    }, 3000)
})

nuevoPais('Alemania')
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Francia')
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Inglaterra')
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises)
    })