import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const Apis = {
    saveReceita: (receita) => Api.post('receitas', receita),
    loadLivros: () => Api.get('receitas'),
}

export default Apis;