export default ListaProductosCondicional(props) {
    return(
        <div>
        <h3>Lista de Productos</h3>
        {props.productos.lenght === 0 ? (
            <p>No hay elementos en la lista</p>
            ) : (
                <ul>
                {props.productos.map((producto, index)=> (
                    <li key={index}>{producto} </li>
            ))}
                </ul>
            )}
        </div>
    )
}