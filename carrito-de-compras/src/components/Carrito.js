import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import DetallesCarrito from './DetallesCarrito';

const styles = {
    stylesCarrito: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}




class Carrito extends Component {
    render() {
        const { carrito, esCarritoVisible, mostrarCarrito } = this.props;
        const { stylesCarrito, bubble } = styles;
        const cantidad = carrito.reduce((acc, el) => acc + el.cantidad, 0);
        return (
            <div>
                <span style={bubble}>
                    {cantidad !== 0
                        ? <BubbleAlert value={cantidad} />
                        : null}
                </span>
                <button style={stylesCarrito}
                    onClick={mostrarCarrito}>
                    Carrito
                </button>
                {esCarritoVisible ? <DetallesCarrito carrito={carrito} /> : null}
            </div>
        )
    }
}

export default Carrito;