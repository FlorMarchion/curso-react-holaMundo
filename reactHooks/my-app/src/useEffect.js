import { Component, useState, useEffect } from "react"
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

/* ¿Cómo hago para desuscribirme de algún efecto que haya creado ? */

const Interval = ({ contador }) => {
    useEffect(() => {
        const i = setInterval(() => console.log(contador), 1000)
        //retorno una funcion que ejecuta cuando se vuelve a ejecutar el useEffect (en este caso el intervalo es el contador):
        return () => clearInterval(i) //el argumento es el valor que devuelve setInterval.
    }, [contador])
    return (
        <p>Intervalo</p>
    )
    /*La desuscripción es util por ejemplo cuando utilizamos webSocket y necesitamos dejar de hacer esa petición.*/
}

const App = () => {
    const [contador, incrementar] = useContador(0)//se otorga el valor inicial
    useEffect(() => {
        document.title = contador;
    }, [contador]) // entre corchetes, donde van las dependecias hago q el título de la página se actualce en base al contador.

    return (
        <div>
            Contador:{contador}
            <button onClick={incrementar}>Incrementar</button>
            <Interval contador={contador} />
        </div>
    )

    //Cómo desmonto un efecto utilizando un componente de clase ? (sobre el mismo ejemplo...)

    class Interval extends Component {
        intervalo = '' //Propiedad que se encargará de obtener el identificador del intervalo. En el componente funcional lo habíamos asignado a una cost i

        //Monta el efecto
        componentDidMount() {
            this.intervalo = setInterval(() => console.log(this.props.contador), 1000)//Asigno el intervalo que devuelve serInterval
        }

        //Desmonta el efecto
        componentWillUnmount(){
            clearInterval(this.intervalo)
        }
        render() {
            return (
                <p>Intervalo</p>
            )
        }
    }
}






export default App;