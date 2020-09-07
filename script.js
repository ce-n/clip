document.addEventListener('DOMContentLoaded', () => {

    let botonProbar = document.getElementById('boton-probar')
    let respuestaAdivinanza = document.getElementById('respuesta-adivinanza')
    let intentosRestantes = document.getElementById('intentos-restantes')
    let pista = document.getElementById('pista')
    let respuestas = []

    const guardarRespuesta = () => {
        let respuesta = respuestaAdivinanza.value
        respuestas.push(respuesta)
        console.log(respuestas)

    }

    const resolverAdivinanza = (respuesta) => {

        const sinEspacios = (oracion) => {
            let sinEspaciosFinal = oracion.trim()
            let sinEspacios = sinEspaciosFinal.split(' ').join('')
            return sinEspacios
        }

        let respuestaConfig = sinEspacios(respuesta).toUpperCase()
        let resultado


        if (respuestaConfig == 'NACEUNAESTRELLA' || respuestaConfig == 'ASTARISBORN') {

            resultado = true

        } else {

            resultado = false

        }

        return resultado
    }

    const comprobarRespuesta = () => {

        let intentos = respuestas.length
        
        for (let index = 0; index < intentos; index++) {
            const element = respuestas[index];
            console.log('respuesta enviada '+ element)
            let esCorrecta = resolverAdivinanza(element)
            console.log('es correcta '+ esCorrecta)
            console.log('numero de intentos ' + respuestas.length)

            if (resolverAdivinanza(element)) {
                console.log('lo lograste')
                intentosRestantes.innerHTML = 'Si!! adivinaste :D'
                botonProbar.disabled = true;
                pista.innerHTML = ''
    
            } else {

                switch (intentos) {
                    case 1:
                        console.log('Quedan 3 intentos')
                        intentosRestantes.innerHTML = 'Quedan 3 intentos'
                        break;
                    case 2:
                        console.log('Quedan 2 intentos')
                        intentosRestantes.innerHTML = 'Quedan 2 intentos'
                        pista.innerHTML = 'El oscar fue por Mejor Canción Original'
                        break;
                    case 3:
                        console.log('Último intento')
                        intentosRestantes.innerHTML = 'Último intento'
                        pista.innerHTML = 'Es la tercera adaptación cinematográfica de una película de 1937'
                        break;
                    case 4:
                        console.log('NO HAY MÁS INTENTOS')
                        intentosRestantes.innerHTML = 'No quedan más intentos :('
                        pista.innerHTML = ''
                        break;
                }

            }
            
        }
    }

    botonProbar.addEventListener ('click', () => {
        guardarRespuesta()
        comprobarRespuesta()

        if(respuestas.length === 4) {
            botonProbar.disabled = true;
        }
    })


})