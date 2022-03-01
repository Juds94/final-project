import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/user` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }

            }

            return config
        })

    }



    getAllUsers = () => {
        return this.api.get('/getAllUsers')
    }


    getOneUser = (user_id) => {
        return this.api.get(`/getOneUser/${user_id}`)
    }

    editOwnProfile = (user) => {
        return this.api.put('/editOwnProfile', user)
    }

    editUser = (user_id, user) => {
        return this.api.put(`/edit/${user_id}`, user)
    }


    addFavPlaces = (place_id) => {
        return this.api.put(`/favPlaces/${place_id}`)
    }

    addDonePitches = (pitch_id) => {
        return this.api.put(`/donePitches/${pitch_id}`)
    }

    addWishPitches = (pitch_id) => {
        return this.api.put(`/wishPitches/${pitch_id}`)
    }

}

const userService = new UserService()

export default userService