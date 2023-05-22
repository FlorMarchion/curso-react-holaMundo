//Creo el componente del producto unitario

import { Component } from 'react';
import Buttom from './Button'

const styles = {
producto: {
    border: 'solid 1px #eee',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px',
},
img:{
    width: '100%',
}   
}

class Producto extends Component {
    render() {
        console.log(this.props)
        const { producto, agregarAlCarrito } = this.props; //Destructuring de producto 
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img}></img>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Buttom onClick={()=> agregarAlCarrito(producto)}>
                    Agregar al carrito
                </Buttom>
            </div>
        )
    }
}
export default Producto;