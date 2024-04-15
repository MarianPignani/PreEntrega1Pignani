import carro from "../img/carro-compras.png";
const CartWidget = () => {
    return (
        <div className="contenedor-carrito">
            <a href=""><img src={carro} alt="carrito de compras" className="carrito" /></a><span >0</span>
        </div>
    )
}

export default CartWidget;