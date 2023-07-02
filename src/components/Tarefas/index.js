import React from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import PropTypes from 'prop-types'
import "./Tarefas.css"

export default function Tarefas({tarefas, editTask, deleteTask}) {
    return (
        <ul className="tarefas">
            {tarefas.map((tarefa, index) => (
                <li key={tarefa}>
                    {tarefa}
                    <span>
                        <FaEdit
                            className="edit"
                            onClick={(event) => editTask(event, index)} 
                        />

                        <FaWindowClose
                            className="delete" 
                            onClick={(event) => deleteTask(event, index)} 
                        />
                    </span>
                </li>
            ))}
        </ul>
    )
}

Tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    editTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
}