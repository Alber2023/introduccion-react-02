import {productos} from ../../constants/productos

export default function Lista() {
    return (
        <ul>
            {productos.map((producto) => (
                <li key = {productos.id}>{producto}</li>
            ))}
        </ul>
     )
    }