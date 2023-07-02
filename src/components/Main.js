// Componente principal
import React, {Component} from "react"
import "./Main.css"
import Form from "./Form"
import Tarefas from "./Tarefas"

class Main extends Component {
    
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1
    }

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem("tarefas"))

        if (!tarefas) return

        this.setState({tarefas})
    }
    // Função de componente que verifica sempre que houver atualização no valor do componente
    componentDidUpdate(prevProps, prevState) {
        const {tarefas} = this.state

        if (tarefas === prevState ) return

        else{
            if (localStorage.getItem("tarefas") !== -1){
                localStorage.setItem("tarefas", JSON.stringify(tarefas))
            }
            else {
                let lista = localStorage.getItem(tarefas)
                console.log(lista)
            }
        }
    }

    inputSubmit = (event) => {
        event.preventDefault()
        const {tarefas, index} = this.state
        let {novaTarefa} = this.state

        if (tarefas.indexOf(novaTarefa) !== -1){
            return alert("Item já adicionado")
        }

        const novasTarefas = [...tarefas]

        if (index === -1){
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: ''
            })
        }
        else {
            novasTarefas[index] = novaTarefa

            this.setState ({
                tarefas: [...novasTarefas],
                index: -1,
                novaTarefa: '',
            })
        }
    }

    inputMudou = (event) => {
        this.setState({
            novaTarefa: event.target.value
        })
    }

    editTask = (event, index) => {
        const {tarefas} = this.state
        
        this.setState({
            index,
            novaTarefa: tarefas[index]
        })
    }

    deleteTask = (event, index) => {
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

                <Form 
                    inputSubmit={this.inputSubmit} 
                    inputMudou={this.inputMudou} 
                    novaTarefa={novaTarefa}
                />

                <Tarefas 
                    tarefas= {tarefas}
                    editTask= {this.editTask}
                    deleteTask= {this.deleteTask}
                />
            </div>
        )
    }
}


export default Main
