import React, { Component } from 'react'
import { Link }  from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <nav className="receitop navbar navbar-light bg-light" role="navigation">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <div className="navbar-brand text-success font-weight-bold bg-white mb-0 h1" href="#page-top">
                            Receitops
                        </div>
                    </div>
                    <div className="btn-toolbar" role="toolbar">
                        <div className="btn-group mr-2" role="group">
                            <Link to='/'><button type="button" className="btn btn-primary">Home</button></Link>
                            <button type="button" className="btn btn-primary">Receitas Doces</button>
                            <button type="button" className="btn btn-primary">Receitas Salgadas</button>
                            <Link to='/newReceita'><button type="button" className="btn btn-primary">Nova Receitas</button></Link>
                            <Link to='/contato'><button type="button" className="btn btn-primary">Contato</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
