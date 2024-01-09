import { useReducer, useState } from "react";

//Estructura de datos que va tener la aplicación.

// const state ={contador : 0}
//action = {type: 'string', payload: any}

const inicial = { contador: 0 }

const reducer = (state, action) => {
    switch (action.type) { //Evaluo el valor que contiene type, mediante el switch
        case 'incrementar': //pregunto si el caso es del tipo "incrementar" ...
            console.log('STATE CONTADOR', state.contador)

            return { contador: state.contador + 1 } // retorno el nuevo estado
        case 'decrementar':
            return { contador: state.contador - 1 }
        case 'set':
            return { contador: action.payload }
        default: return state;
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, inicial) //El primer argumento es el reducer, el segundo argumento es el estado inicial.
    const [valor, setValor] = useState(0);
    //useReducer retorna un arreglo muy similar al de useState
    //dispatch dispara eventos en el formato de las acctions {type, payload}

    return (
        <div>
            Contador : {state.contador}
            <input value={valor} onChange={e => setValor(e.target.value)} />
            <button onClick={() => dispatch({ type: 'decrementar' })}>Menos</button>
            <button onClick={() => dispatch({ type: 'incrementar' })}>Más</button>
            <button onClick={() => dispatch({ type: 'set', payload: valor })}>Set</button>
        </div>
    )
}

export default App;