import React, { Component } from 'react'
import Apis from './../../../Service/Api';
import { Link }  from 'react-router-dom'

export default class Doce extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Receitas: [],
            isLoading: false
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        // setInterval(() => this.setState({ contador: this.state.contador + 1 }), 1000)
        Apis.loadReceitas(2).then((res) => {
            console.log(res);

            this.setState({ Receitas: res.data, isLoading: false })
        })
    }
    renderReceitas(Receita) {
        return (
            <div className="moldura card w-50 shadow-lg p-3 mb-5 bg-white rounded">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Receita.prato}</h5>
                    <p className="card-text">{Receita.descricao}</p>
                    <div className="text-center">
                        <Link to='/'><button type="button" className="btn btn-primary">Ir para a receita</button></Link>
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
