import { Component } from "react";
import Logo from './Logo'
import Carrito from './Carrito'

const styles = {
    navbar: {
        display: "flex",
        flexdirection: "row",
        alignItems: "center",
        height: "100px",
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}

class Navbar extends Component {
    render() {
        const { carrito, esCarritoVisible, mostrarCarrito } = this.props;
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Carrito
                    carrito={carrito}
                    esCarritoVisible={esCarritoVisible}
                    mostrarCarrito={mostrarCarrito} />
            </nav>
        )
    }
}

export default Navbar;