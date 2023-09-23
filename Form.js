import { Component } from "react";

class Form extends Component {
    initialState = {
        nome: '',
        turma: '',
        turno: '',
    }
    state = this.initialState

    handleChange = (event) => {
        const {name,value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const{nome, turma,turno} = this.state;
        return (
            <form>
                <label htmlFor="nome">Nome</label>
                <input type="text"
                       name="nome"
                       id="nome"
                       value={nome}
                       onChange={this.handleChange}
                    />
                <label htmlFor="turma">Turma</label>    
                <input type="text"
                       name="turma"
                       id="turma"
                       value={turma}
                       onChange={this.handleChange}
                    />
                <label htmlFor="turno">Turno</label>
                <input type="text"
                       name="turno"     
                       id="turno"
                       value={turno}
                       onChange={this.handleChange} />
                <input type="button" value ="Enviar" onClick={this.submitForm} />
            </form>
        )
    }
}   export default Form;