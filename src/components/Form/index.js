import React from "react";
import "./Form.css"
import PropTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa'

export default function Form({inputSubmit, inputMudou, novaTarefa}) {
    return (
    <form onSubmit={inputSubmit} action="#" className="form">
        <input onChange={inputMudou} type="text" value={novaTarefa} />
        <button type="submit">
            <FaPlus />
        </button>
    </form>)
}


Form.propTypes = {
    inputSubmit: PropTypes.func.isRequired,
    inputMudou: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired
}