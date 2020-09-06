document.addEventListener('DOMContentLoaded', () => {

    let botonProbar = document.getElementById('boton-probar')
    let respuestaAdivinanza = document.getElementById('respuesta-adivinanza')

    botonProbar.addEventListener('click', () => {

        let valor = respuestaAdivinanza.value


        const resolverAdivinanza = (respuesta) => {

            const sinEspacios = (oracion) => {
                let sinEspaciosFinal = oracion.trim()
                let sinEspacios = sinEspaciosFinal.split(' ').join('')
                return sinEspacios
            }

            let respuestaConfig = sinEspacios(respuesta).toUpperCase()


            if (respuestaConfig == 'NACEUNAESTRELLA' || respuestaConfig == 'ASTARTISBORN') {

                respuestaConfig = 'ACERTASTE'

            } else {

                respuestaConfig = 'FALLASTE'

            }


            return respuestaConfig
        }



        console.log(resolverAdivinanza(valor))



    })

})