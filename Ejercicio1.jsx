import { useState } from 'react'
import TituloEjercicio from '../TituloEjercicio'

function ParentComponent() {
  const [message, setMessage] = useState ("Hola desde el padre")
  const handleButtonClick = () => {
    setMessage("Mensaje actualizado desde el padre")
  }
    return (
      <div>
          <h2>Componente padre</h2>
          <p>Mensaje:{message}</p>
          <button onClick={handleButtonClick}>Actualizar mensaje</button>
          <ChildComponent message={message}/>
      </div>
    )
}

function ChildComponent(props) {
  return (
      <div>
          <p>Mensaje del padre: {props.message}</p>
      </div>
  )

}

export default function Ejercicio1() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
     <ParentComponent/>
    </section>
  )
}
