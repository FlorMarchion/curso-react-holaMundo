//----> useRef <------

//Nos permite obtener referencias dentro del mismo DOM

import { useRef } from "react";

const App = () => {
    //useRef devuelve un objeto que va a tener la propiedad de current, que en principio va a tener un valor null.
    //Luego se le asigna una constante de referencia a algún elemento jsx y vamos a poder acceder al mismo.
    const ref = useRef()
    const inputRef = useRef()
    const click = () => {
        console.log(ref.current.clientHeight)
        ref.current.innerHTML = 'Cahnchito Feliz'
    }
    const focus = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focus}>Focus</button>
            <div onClick={click} ref={ref}>lalala</div>
        </div>
    )
}

export default App;