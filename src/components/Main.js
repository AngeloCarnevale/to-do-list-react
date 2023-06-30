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
        let {novaTarefa} = this.state

        if (tarefas.indexOf(novaTarefa) !== -1){
            return alert("Item já adicionado")
        }

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

    editTask = (event, index) => {
        console.log("edit", index)
    }

    deleteTask(event, index) {
        const {tarefas} = this.state
        const novasTarefas = [...tarefas]
        novasTarefas.splice(index, 1)
        
        this.setState({
            tarefas: [...novasTarefas]
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
                    {tarefas.map((tarefa, index) => (
                        <li key={tarefa}>
                            {tarefa}
                            <span>
                                <FaEdit onClick={(event)=> this.editTask(event, index)} className="edit"/>
                                <FaWindowClose onClick={(event)=> this.deleteTask(event, index)} className="delete"/>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default Main
