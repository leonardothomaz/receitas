import React, { Component } from 'react'
import Apis from '../../Service/Api.js'

export default class NovaReceita extends Component {

    constructor(props) {
        super(props)
        this.salvarReceita = this.salvarReceita.bind(this)
        this.state = {
            src: '',
            name: ''
        }
    }

    salvarReceita() {
        const NovoLivro = {
            email: this.refs.email.value,
            tipoReceita: this.refs.tipoReceita.value,
            autor: this.refs.autor.value,
            prato: this.refs.prato.value,
            descricao: this.refs.descricao.value,
            modoPreparo: this.refs.modoPreparo.value,
            ingredientes: this.refs.ingrediente.value,
            imagem: this.state.src
        }
        let form = document.getElementById('formNovaReceita')
        if (form.checkValidity()) {

            Apis.saveReceita(NovoLivro).then(() => {
            })
        }

    }

    selecionarImagem = evt => {
        var files = evt.target.files;

        for (var i = 0, f; f = files[i]; i++) {

            if (!f.type.match('image.*')) {
                continue;
            }

            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function (theFile) {
                return function (e) {
                    this.setState({ src: e.target.result, name: escape(theFile.name) });
                };
            })(f).bind(this);

            reader.readAsDataURL(f);
        }
    }

    render() {
        return (
            <div className="molduradiv1">
                <form id="formNovaReceita">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" ref="email" className="form-control" id="exampleFormControlInput1" required />
                    </div>
                    <div className="form-group">
                        <label>Receita</label>
                        <select ref="tipoReceita" className="form-control" id="tipoReceita">
                            <option value="1">Salgada</option>
                            <option value="2">Doce</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Autor</label>
                            <input ref="autor" type="text" className="form-control" required />
                        </div>
                        <div className="col">
                            <label>Nome do Prato</label>
                            <input ref="prato" type="text" className="form-control" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Descrição do Prato</label>
                        <textarea ref="descricao" className="form-control" id="descricao" rows="3" required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Modo de Preparo</label>
                        <textarea ref="modoPreparo" className="form-control" id="modoPreparo" rows="3" required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Ingredientes</label>
                        <textarea ref="ingrediente" className="form-control" id="ingredientes" rows="3" required></textarea>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <label className="custom-file-label">Selecione a Imagem </label>
                            <input ref="imagem" type="file" className="custom-file-input" accept=".jpg,.jpeg,.png" onChange={this.selecionarImagem} required />
                            <img className="thumb" src={this.state.src} title={this.state.name} />
                        </div>
                    </div>
                    <div className="form-group">
                        <button onClick={this.salvarReceita} className="btn btn-outline-success btn-lg btn-block">Publicar Receita</button>
                    </div>
                </form>
            </div>
        )
    }
}
