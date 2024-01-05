//Los componentes funcionales en React siempre están construidos con funciones puras,
// es decir que son funciones que siempre retornan lo mismo, dado los argumentos que entregados a dicha función.

const MiComponente = ({miProp}) =>{
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = () => {
  return (
    <MiComponente miProp={'Chanchito Feliz'}/>
  )
}

export default MiComponente;
