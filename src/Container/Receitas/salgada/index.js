import React, { Component } from 'react'
import Apis from './../../../Service/Api';
import { Link } from 'react-router-dom'

export default class Salgada extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Receitas: [],
            isLoading: false
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        Apis.loadReceitas(1).then((res) => {

            this.setState({ Receitas: res.data, isLoading: false })
        })
    }
    renderReceitas(Receita) {
        return (
            <div className="moldura card w-50 shadow-lg p-3 mb-5 bg-white rounded">
                <img src={Receita.imagem} className="card-img-top rounded"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{Receita.prato}</h5>
                    <p className="card-text">{Receita.descricao}</p>
                    <div className="text-center">
                        <Link to={`/receita/${Receita.id}`}><button type="button" className="btn btn-primary">Ir para a receita</button></Link>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <>
                <section>
                    {
                        this.state.isLoading &&
                        <span> Carregando Receitas...</span>
                    }
                    {
                        !this.state.isLoading &&
                        <div>
                            <br />
                            {this.state.Receitas.map(this.renderReceitas)}
                        </div>
                    }
                    <br />

                </section>
            </>
        )
    }
}
