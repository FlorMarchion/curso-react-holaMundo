import { Component, component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

import Title from './components/Title';

class App extends Component {
  // Estado inicial con los productos
  state = {
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
    ],
    carrito: [],
    esCarritoVisible: false,
  }

  agregarAlCarrito = (producto) => {
    const { carrito } = this.state

    if (carrito.find(x => x.name === producto.name)) {
      const newCarrito = carrito.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({ carrito: newCarrito })
    }
    return this.setState({
      carrito: this.state.carrito.concat({
        ...producto,
        cantidad: 1,
      })

    })

  }

  mostrarCarrito = () => {
    if (!this.state.carrito.length) {
      return
      
    }
    this.setState({ esCarritoVisible: !this.state.esCarritoVisible }) //con la negacion va a cambiar el estado si el carro es visible o no.(?)
  }

  render() {
    const { esCarritoVisible } = this.state
    return (
      <div>
        <Navbar
          carrito={this.state.carrito}
          esCarritoVisible={esCarritoVisible}
          mostrarCarrito={this.mostrarCarrito} />
        <Layout>
          <Title />
          <Productos
            agregarAlCarrito={this.agregarAlCarrito}
            productos={this.state.productos} />
        </Layout>
      </div>
    )
  }
}


export default App;
