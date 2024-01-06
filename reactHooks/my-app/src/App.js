import { useState, Component } from 'react'


//-------> useState en componente Funcional <-------------

// const App = () => {
//     const [contador, setContador] = useState(0) //cero es el valor inicale
//     return(
//         <div>
//             Contador:{contador}
//             <button onClick={()=>setContador(contador+1)}>Incrementar</button>
//         </div>
//     )
// }

// useState en componente de clase
    // class App extends Component {
    //     state = {contador : 0}
    //     incrementar = () => {
    //         this.setState({contador:this.state.contador + 1})
    //     }
    //     render(){
    //         return (
    //             <div>
    //                 contador: {this.state.contador}
    //                 <button onClick={this.incrementar}>Incrementar</button>
    //             </div>
    //         )
    //     }
    // }


    //----> CUSTOM HOOK <---------
    //Uso el mismo ejemplo de componente funcional, pero customizado.
    const useContador = (inicial) => {
        const [contador, setContador] = useState(inicial) //le paso el valor inicial del parametro de useCOntador
        const incrementar = () =>{
            setContador(contador + 1)
        }
        return [contador, incrementar]

    }

    const App = () => {
        const [contador, incrementar] = useContador(0)//se otorga el valor inicial
        return(
            <div>
                Contador:{contador}
                <button onClick={incrementar}>Incrementar</button>
            </div>
        )
        }

export default App;

/* --- useState es una funcion que reotrn aun array, cuyo primer valor es un entero( en este caso ese valor entero
es cero)
El segundo valor del arreglo es una función(setContador), que nos permite actualiza el valor de contador(el valor inicial)

-----> REGLAS DE LOS HOOKS <------
siempre se llaman al principio del componente. Nunca se llaman en loops, ni en condiciones.
Siempre se lllaman en el nivel más alto del componente.

Siempre se llaman dentro de un componente de React
 o dentro de un custom hooks, -un hook customizado-

un custom hook simpre comienza con la palaba "use"

*/