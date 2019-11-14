import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const Apis = {
    saveReceita: (receita) => Api.post('receitas', receita),
    loadReceitasById: (idReceita) => Api.get('receitas', {
        params: {
            id: idReceita
        }
    }),
    loadReceitas: (tipoReceita) => Api.get('receitas', {
        params: {
            tipoReceita: tipoReceita
        }
    })
   
}

export default Apis;