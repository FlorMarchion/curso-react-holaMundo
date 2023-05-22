import {Component, component} from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';

class App extends Component {
  // Estado inicial con los productos
  state ={
    productos: [
      {
        name: 'Arbejas', 
        price: 300, 
        img: './imagenes/arbejas.jpg'
      },
      {
        name: 'Lechuga', 
        price: 1000,
        img: './imagenes/lechuga.jpg'
      },
      {
        name: 'Tomate',
        price: 500,
        img: './imagenes/tomate.jpg'
      },
    ]
  }
  render(){
    return (
      <div>
        <Layout>
          <Title />
        <Productos
        agregarAlCarrito={()=> console.log('no hace nada')}
        productos={this.state.productos}/>
        </Layout>
      </div>
    )
  }
}


export default App;
