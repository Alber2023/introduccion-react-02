import { useState } from "react";

export default function Formulario() {
const [newForm, setNewForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
)}

const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewForm({
      ...newForm,
      [name]: value
    })

const handleSubmit = (event) => {
    event.preventDefault()
    alert('Datos del formulario:', newForm)
    console.log('Datos del formulario:', newForm)
    }
    return (
        <div>
          <h2>Formulario de Contacto</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre:</label>
              <input type="text" name="nombre" value={newForm.nombre} onChange={handleInputChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={newForm.email} onChange={handleInputChange} />
            </div>
            <div>
              <label>Mensaje:</label>
              <textarea name="mensaje" value={newForm.mensaje} onChange={handleInputChange} />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )
    }
