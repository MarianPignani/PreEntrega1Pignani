const ItemDetail = ({item}) =>  {
    return (
        <div className="cont-detail">
            <div className="div-detail">
                <div>
                    <img className="img-prod" src={item.imagen} alt={item.nombre}/>
                </div>
                <div className="div-right">
                    <h3 className="nombre-detail">{item.nombre}</h3>
                    <p className="precio-detail">${item.precio}</p>
                    <p className="descripcion">{item.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;