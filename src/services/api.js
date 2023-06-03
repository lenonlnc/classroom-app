import axios from 'axios'
import { parseCookies } from 'nookies'

const { token } = parseCookies()

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
}

// não tem utilidade aqui já que não tenho um back end feito pra esse app
// é só pra manter o padrão que seria feito em um caso real
