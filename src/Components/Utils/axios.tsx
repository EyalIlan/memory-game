import Axios from 'axios'


export default Axios.create({
    baseURL: 'https://myheroacademiaapi.com/api/character'
})