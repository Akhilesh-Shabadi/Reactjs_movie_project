import axios from 'axios'

const axiosinst=axios.create({
    baseURL:"http://localhost:4000/"
})

export default axiosinst;