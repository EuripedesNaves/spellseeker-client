import axios from 'axios'

class Api{
    constructor(){
        this.api = axios.create({
            baseURL: "http://localhost:5055/"
        })
        this.api.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token')
                if(token){
                    config.headers = {
                        'Authorization': `Bearer ${token}` 
                    }
                }
                return config
            }
        )
        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                if(error.response.status === 401){
                    localStorage.removeItem('token')
                 }
                 throw error
            } 
        )
    }
    
    //login
    login = async (user) => {
        try {
            const { data } = await this.api.post('/login', user)
            localStorage.setItem('token', data.token)
            return data
        } catch (error) {
            console.log(error, `Could not login`)
        }
    }

    //signup
    signup = async () => {
        try {
            const { data } = await this.api.post('/register', )
            return data
        } catch (error) {
            throw error.responde;
        }
    }

    //adicionar 
    // addCard = async (title) => {
    //     try {
    //         const { data } = await this.api.post('/cards', {title})
    //         return data
    //     } catch (error) {
    //         console.log(error, `Could not add a new card`)
    //     }
    // }


    // //get all 
    // getCards = async () => {
    //     try {
    //         const { data } = await this.api.get('/cards')
    //         return data            
    //     } catch (error) {
    //         console.log(error, `Could not load the cards`)
    //     }
    // }

    // //update card especifico
    // updateCard = async (id, cards) => {
    //     try {
    //         await this.api.put(`/cards/${id}`, card)
    //     } catch (error) {
    //         console.log(error, `Could not update this card`)
    //     }
    // }

    // //delete card especifico
    // deleteCard = async (id, card) => {
    //     try {
    //         await this.api.delete(`/cards/${id}`, card)
    //     } catch (error) {
    //         console.log(error, `Could not delete this card`)
    //     }
    // }




}


export default new Api();