// Componente principal
import React, {Component} from "react";
import "./Main.css"

// Form
import { FaPlus } from 'react-icons/fa'

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa'

class Main extends Component {
    
    state = {
        novaTarefa: '',
        tarefas: []
    }

    inputSubmit = (event) => {
        event.preventDefault()
        const {tarefas} = this.state
        let novaTarefa = this.state

        if (tarefas.indexOf(novaTarefa) !== -1) return;
        
        const novasTarefas = [...tarefas]
        this.setState({
            tarefas: [...novasTarefas, novaTarefa]
        })
    }
    inputMudou = (event) => {
        this.setState({
            novaTarefa: event.target.value
        })
    }

    render(){
        const {novaTarefa, tarefas} = this.state
        
        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>

                <form onSubmit={this.inputSubmit} action="#" className="form">
                    <input onChange={this.inputMudou} type="text" value={novaTarefa}/>
                    <button type="submit">
                        <FaPlus/>
                    </button>
                </form>

                <ul className="tarefas">
                    {tarefas.map(tarefa =>(
                        <li key={tarefa}>
                            {tarefa}
                        <span>
                            <FaEdit className="edit"/>
                            <FaWindowClose className="delete"/>
                        </span>    
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default Main
