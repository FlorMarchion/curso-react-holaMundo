//Creo el componente donde se van a renderizar todos los productos con sus propiedades

import { Component } from 'react';
import Producto from './Producto'

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
}

class Productos extends Component {
    render() {
        //Desestructuro las propiedades que van a venir de Productos y del meto de agregar al carrito
        const { productos, agregarAlCarrito } = this.props
        return (
            <div style={styles.productos}>
                {productos.map(producto =>
                    <Producto
                        agregarAlCarrito={agregarAlCarrito}
                        key={producto.name}
                        producto={producto}
                    />)}
            </div>
        )
    }

}
export default Productos;