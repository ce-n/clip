document.addEventListener('DOMContentLoaded', () => {

    let botonProbar = document.getElementById('boton-probar')
    let intento = 0
    let numeroClicksBoton = 0

    const resolverAdivinanza = (respuesta) => {

        const sinEspacios = (oracion) => {
            let sinEspaciosFinal = oracion.trim()
            let sinEspacios = sinEspaciosFinal.split(' ').join('')
            return sinEspacios
        }

        let respuestaConfig = sinEspacios(respuesta).toUpperCase()
        let resultado


        if (respuestaConfig == 'NACEUNAESTRELLA' || respuestaConfig == 'ASTARTISBORN') {

            resultado = true

        } else {

            resultado = false

        }

        return resultado
    }

    /*
    botonProbar.addEventListener('click', () => {

        let respuestaAdivinanza = document.getElementById('respuesta-adivinanza')
        let valor = respuestaAdivinanza.value

        numeroClicksBoton += 1

        if (numeroClicksBoton < 5 && resolverAdivinanza(valor)) {

            console.log('lo lograste')

        } else {

            switch (numeroClicksBoton) {
                case 1:
                    console.log('Quedan 3 intentos')
                    resolverAdivinanza(valor)
                    break;
                case 2:
                    console.log('Quedan 2 intentos')
                    resolverAdivinanza(valor)
                    break;
                case 3:
                    console.log('Último intento')
                    break;
                default:
                    if (resolverAdivinanza(valor)) {
                        console.log('lo lograste')
                    } else {
                        console.log('perdiste')
                    }
                    break
            }
        }

    })*/

    //

    /*for (intento; intento < 4; intento++) {

        botonProbar.addEventListener('click', () => {

            let respuestaAdivinanza = document.getElementById('respuesta-adivinanza')
            let valor = respuestaAdivinanza.value

            console.log('intento numero' + intento + ' ' + valor)

            if (resolverAdivinanza(valor)) {
                intento = 4
            }


        })

    }*/

    const capturarRespuesta = () => {
        botonProbar.addEventListener('click', (event) => {
            let respuestaAdivinanza = document.getElementById('respuesta-adivinanza')
            let respuestaEnviada = respuestaAdivinanza.value
            event.preventDefault()
                //console.log(respuestaEnviada)
            return respuestaEnviada
        })

    }

    console.log(capturarRespuesta())

    /*for (intento; intento < 4; intento++) {



        console.log('intento numero' + intento +)

        if (intento == 0) {
            let esCorrecta = resolverAdivinanza(valor)
            if (esCorrecta) {
                break
            }

        }

    }*/

})