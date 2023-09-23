import React, {Component} from 'react'

const TableHeader = () => {
    return( 
        <thead>
                <tr>
                    <th>Nome</th>
                    <th>Turma</th>
                    <th>Turno </th>
                </tr>
            </thead>
    );
}
/*
<tr>
                    <td>Dudu</td>
                    <td>Programação Web</td>
                </tr>
                <tr>
                    <td>Paty</td>
                    <td>Análise de Algoritmos</td>
                </tr>
                <tr>
                    <td>Joãozinho</td>
                    <td>Programação OO</td>
                </tr>
                <tr>
                    <td>Ju</td>
                    <td>Engenharia de requisitos</td>
                </tr>
*/ 
const TableBody = (props) => {
    const rows = props.alunosETurmas.map( (row,index) => {
        return (
            <tr key={index}>
                <td>{row.nome}</td>
                <td>{row.turma}</td>
                <td>{row.turno}</td>
                <td>
                    <button onClick={()=> props.removerAluno(index)}>
                        Apagar
                    </button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>
    );
}
class Table extends Component{
    render(){ 
        const {alunos,removerAluno} = this.props
        return (
            <table>
                <TableHeader />
                <TableBody alunosETurmas={alunos}
                            removerAluno={removerAluno}/>
            </table>
        
        )
    }} export default Table