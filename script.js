document.addEventListener('DOMContentLoaded', () => {

    let botonProbar = document.getElementById('boton-probar')
    let respuestaAdivinanza = document.getElementById('respuesta-adivinanza')
    let intentosRestantes = document.getElementById('intentos-restantes')
    let pista = document.getElementById('pista')
    let respuestas = []

    const guardarRespuesta = () => {
        let respuesta = respuestaAdivinanza.value
        respuestas.push(respuesta)

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
            
            const element = respuestas[index]
            let esCorrecta = resolverAdivinanza(element)

            if (resolverAdivinanza(element)) {
                intentosRestantes.innerHTML = 'Si!! Adivinaste :D'
                botonProbar.disabled = true;
                pista.innerHTML = ''
    
            } else {

                switch (intentos) {
                    case 1:
                        intentosRestantes.innerHTML = 'Quedan 3 intentos'
                        break;
                    case 2:
                        intentosRestantes.innerHTML = 'Quedan 2 intentos'
                        pista.innerHTML = 'PISTA: El oscar fue por Mejor Canción Original'
                        break;
                    case 3:
                        intentosRestantes.innerHTML = 'Último intento'
                        pista.innerHTML = 'PISTA: Es la tercera adaptación cinematográfica de una película de 1937'
                        break;
                    case 4:
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