import React from "react";
import { useState } from "react";
import "/workspaces/TodoList-TM/src/styles/home.css"
//create your first component
const Home = () => {
    const [input, setInput] = useState("")
    const [tareas, setTareas] = useState([])


    function manejoEnvio(e) {
        e.preventDefault()
        if (input.trim() !== "") {
            const tareasActualizadas = [input, ...tareas]
            setTareas(tareasActualizadas)
            setInput("")
        }
    }

    function borrar(id) {
        let nuevo = []
        nuevo = tareas.filter((item, index) => {
            if (index != id) {
                return item
            }
        })
        setTareas(nuevo)
    }

    return (
        <div className="tarea-contenedor">
            <form className="tarea-formulario"
                onSubmit={manejoEnvio}>
                <input
                    className="tarea-input"
                    type="text"
                    placeholder="Escribe una tarea"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </form>
            <ul className="list-unstyled ">
                {tareas.map((elemento, id) => (
                    <li key={id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {elemento}
                        <button className={"trash"}onClick={() => borrar(id)}><i class="fa-solid fa-trash"></i></button>
                    </li>
                ))}
            </ul>

            <p>Tareas pendientes: {tareas.length} </p>
        </div>
    )
}

export default Home;
