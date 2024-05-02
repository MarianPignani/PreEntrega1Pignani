import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                const producto = arrayProductos.find(item => item.id == id)
                resolve(producto);
            }, 2000)
        });

        promesa.then (respuesta => {
            setItem(respuesta);
        })
    }, [id])
    
    
    return (
        <div className="container">
            <div className="div-container">
                <ItemDetail item={item} />
            </div>
        </div>
    )
}

export default ItemListContainer;