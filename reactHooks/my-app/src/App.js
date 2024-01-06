import { useState, useEffect } from "react"
/*

----UseEffect-----

Genera efectos laterales en nuestra aplicación, por ejemplo: actualizar el DOM, leer en DB,
escribir en DB, conectarnos a una api. Es algo que va a efectuar un cambio dentro de nuestro componente.

En el siguiente ejemplo voy a actualizar el título de la app.

Sintaxis del useEffect:
useEffect(() => {}, [])

Explicación:
useEffect((funcion) => {lógica que va a ejecutar}, [Dependencias que necesita para poder funcionar])

Si no colocamos el segundo argumento [], el useEffect se ejecutará simpre que haya algún cambio dentro del componente.

*/

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial) //le paso el valor inicial del parametro de useCOntador
    const incrementar = () => {
        setContador(contador + 1)
    }
    return [contador, incrementar]

}

const App = () => {
    const [contador, incrementar] = useContador(0)//se otorga el valor inicial
    useEffect(()=>{
        document.title = contador;
    }, [contador]) // entre corchetes, donde van las dependecias hago q el título de la página se actualce en base al contador.

    return (
        <div>
            Contador:{contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default App;